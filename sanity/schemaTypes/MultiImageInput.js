"use client";
import { useCallback, useState } from "react";
import { Stack, Button, Card, Text, Spinner, Flex, Box } from "@sanity/ui";
import { insert, unset } from "sanity";
import { TrashIcon } from "@sanity/icons";

export default function MultiImageInput(props) {
  const { onChange, value = [] } = props;
  const [uploading, setUploading] = useState(false);
  const [uploadCount, setUploadCount] = useState({ current: 0, total: 0 });

  const handleFileChange = useCallback(
    async (event) => {
      const files = Array.from(event.target.files);
      if (files.length === 0) return;

      setUploading(true);
      setUploadCount({ current: 0, total: files.length });

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        setUploadCount({ current: i + 1, total: files.length });

        try {
          const formData = new FormData();
          formData.append("file", file);
          formData.append("upload_preset", "artist");
          formData.append("folder", "artist-gallery");

          const response = await fetch(
            "https://api.cloudinary.com/v1_1/djfkwjgrz/image/upload",
            {
              method: "POST",
              body: formData,
            }
          );

          if (!response.ok) throw new Error("Upload failed");

          const data = await response.json();

          onChange(
            insert(
              [
                {
                  _type: "galleryImage",
                  _key: `cloudinary-${Date.now()}-${i}`,
                  url: data.secure_url,
                  alt: file.name,
                },
              ],
              "after",
              value.length > 0 ? [value.length - 1] : [-1]
            )
          );
        } catch (err) {
          console.error(`File ${i + 1} upload failed:`, err);
          alert(`Failed to upload ${file.name}`);
        }
      }

      setUploading(false);
      event.target.value = "";
    },
    [onChange, value]
  );

  const handleRemove = useCallback(
    (index) => {
      onChange(unset([index]));
    },
    [onChange]
  );

  return (
    <Stack space={3}>
      <Button
        as="label"
        mode="ghost"
        text={uploading ? "Uploading..." : "Upload Multiple Images"}
        tone="primary"
        disabled={uploading}
      >
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleFileChange}
          style={{ display: "none" }}
          disabled={uploading}
        />
      </Button>

      {uploading && (
        <Card padding={3} radius={2} shadow={1}>
          <Flex align="center" gap={3}>
            <Spinner />
            <Text size={1}>
              Uploading {uploadCount.current} / {uploadCount.total}...
            </Text>
          </Flex>
        </Card>
      )}

      {value && value.length > 0 && (
        <Stack space={3}>
          {value.map((item, index) => (
            <Card key={item._key || index} padding={3} radius={2} shadow={1}>
              <Stack space={2}>
                {item.url && typeof item.url === 'string' && (
                  <img
                    src={item.url}
                    alt={item.alt || "Gallery image"}
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      borderRadius: "4px",
                    }}
                  />
                )}
                <Flex justify="space-between" align="center">
                  <Text size={1} muted>
                    {item.alt || "No description"}
                  </Text>
                  <Button
                    icon={TrashIcon}
                    tone="critical"
                    mode="ghost"
                    onClick={() => handleRemove(index)}
                  />
                </Flex>
              </Stack>
            </Card>
          ))}
        </Stack>
      )}
    </Stack>
  );
}