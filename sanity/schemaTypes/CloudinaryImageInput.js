import { useCallback, useState } from "react";
import { Stack, Button, Card, Text, Spinner, Flex } from "@sanity/ui";
import { set, unset } from "sanity";
import { TrashIcon } from "@sanity/icons";

export default function CloudinaryImageInput(props) {
  const { onChange, value } = props;
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = useCallback(
    async (event) => {
      const file = event.target.files[0];
      if (!file) return;

      setUploading(true);
      setError(null);

      try {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "artist");
        formData.append("folder", "artist-images");

        const response = await fetch(
          "https://api.cloudinary.com/v1_1/djfkwjgrz/image/upload",
          {
            method: "POST",
            body: formData,
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error?.message || "Upload failed");
        }

        onChange(set(data.secure_url));
      } catch (err) {
        setError("Upload failed. Please try again.");
        console.error("Cloudinary upload error:", err);
      } finally {
        setUploading(false);
        event.target.value = "";
      }
    },
    [onChange]
  );

  const handleDelete = useCallback(() => {
    onChange(unset());
  }, [onChange]);

  // Handle both string URLs and objects with url property
  const imageUrl = typeof value === 'string' ? value : value?.url;
  const displayText = typeof value === 'string' ? value : (value?.url || 'Invalid data');

  return (
    <Stack space={3}>
      {imageUrl && (
        <Card padding={3} radius={2} shadow={1}>
          <Stack space={3}>
            <img
              src={imageUrl}
              alt="Preview"
              style={{
                maxWidth: "100%",
                height: "auto",
                borderRadius: "4px",
              }}
            />
            <Text size={1} muted>
              {displayText}
            </Text>
            <Flex gap={2}>
              <Button
                as="label"
                mode="ghost"
                text="Change Image"
                tone="primary"
                disabled={uploading}
                style={{ flex: 1 }}
              >
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                  disabled={uploading}
                />
              </Button>
              <Button
                mode="ghost"
                text="Delete"
                tone="critical"
                icon={TrashIcon}
                onClick={handleDelete}
                disabled={uploading}
              />
            </Flex>
          </Stack>
        </Card>
      )}

      {!imageUrl && (
        <Button
          as="label"
          mode="ghost"
          text={uploading ? "Uploading..." : "Upload Image"}
          tone="primary"
          disabled={uploading}
        >
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            style={{ display: "none" }}
            disabled={uploading}
          />
        </Button>
      )}

      {uploading && (
        <Card padding={3} radius={2} shadow={1}>
          <Stack space={2}>
            <Spinner />
            <Text size={1}>Uploading to Cloudinary...</Text>
          </Stack>
        </Card>
      )}

      {error && (
        <Card padding={3} radius={2} tone="critical">
          <Text size={1}>{error}</Text>
        </Card>
      )}
    </Stack>
  );
}