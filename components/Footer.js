export default function Footer() {
  return (
    <footer className="bg-[#0f4c5c] text-white">
      <div className="border-t border-white/40" />

      <div className="max-w-7xl mx-auto px-4 py-6 text-center text-sm space-y-2">
        
        {/* Strong White Quick Links */}
        <p className="font-extrabold text-base tracking-wide">
          <a
            href="/about"
            className="inline-block transition hover:scale-110 hover:underline drop-shadow-sm"
          >
            About
          </a>{" "}
          ·{" "}
          <a
            href="/experience"
            className="inline-block transition hover:scale-110 hover:underline drop-shadow-sm"
          >
            Experience
          </a>{" "}
          ·{" "}
          <a
            href="/research"
            className="inline-block transition hover:scale-110 hover:underline drop-shadow-sm"
          >
            Research
          </a>{" "}
          ·{" "}
          <a
            href="/administrative-roles"
            className="inline-block transition hover:scale-110 hover:underline drop-shadow-sm"
          >
            Administrative Roles
          </a>{" "}
          ·{" "}
          <a
            href="/research-scholars"
            className="inline-block transition hover:scale-110 hover:underline drop-shadow-sm"
          >
            Research Scholars
          </a>
        </p>

        <p className="text-white/80">
          © 2025 Dr. Uttama Dixit. All Rights Reserved.
        </p>

        <p className="italic text-white/80">
          Passionately created by{" "}
          <a
            href="https://www.web-developer-kp.com"
            target="_blank"
            className="underline hover:opacity-90"
          >
            web-developer-kp.com
          </a>
        </p>
      </div>
    </footer>
  );
}
