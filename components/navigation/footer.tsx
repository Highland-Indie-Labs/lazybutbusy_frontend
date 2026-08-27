import Link from "next/link";

const LINKS = [
  { label: "PRIVACY (BORING)", href: "/privacy" },
  { label: "TERMS (LONG)", href: "/terms" },
  { label: "NAP SCHEDULE", href: "/lab" },
  { label: "TWITTER", href: "https://twitter.com" },
];

export function Footer() {
  return (
    <footer className="box-border w-full border-t-2 border-ink bg-ink px-8 py-12">
      <div className="container-lbb flex flex-wrap items-center justify-between gap-6 px-0">
        <div className="flex flex-col gap-4">
          <span className="font-display text-headline-lg font-bold uppercase text-white">Lazy But Busy</span>
          <span className="font-mono text-[16px] leading-6 tracking-[1.6px] uppercase text-ghost">
            © {new Date().getFullYear()} Lazy But Busy. Optimizing for nap time.
          </span>
        </div>
        <nav className="flex flex-wrap gap-6">
          {LINKS.map((l) => (
            <Link key={l.label} href={l.href} className="font-mono text-[16px] leading-6 uppercase text-ghost no-underline hover:text-white">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
