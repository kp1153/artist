export default function Footer() {
  return (
    <footer className="bg-[#0f4c5c] text-white">
      <div className="border-t border-white/40" />

      <div className="max-w-7xl mx-auto px-4 py-6 text-center text-sm space-y-2">
        
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