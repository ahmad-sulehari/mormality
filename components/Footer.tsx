import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6 bg-[#080808]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Mormality" width={36} height={36} className="invert" />
          <span style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="font-bold text-white">
            Mormality
          </span>
        </div>

        <p className="text-white/25 text-sm text-center">
          © {new Date().getFullYear()} Mormality. All rights reserved.
        </p>

        <div className="flex gap-6">
          {["Services", "Work", "About", "Contact"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-xs text-white/35 hover:text-white transition-colors duration-200 cursor-pointer"
            >
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
