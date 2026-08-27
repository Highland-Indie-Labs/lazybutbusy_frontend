import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Chip } from "@/components/ui/chip";

export default function NotFound() {
  return (
    <section className="grid-paper">
      <div className="container-lbb flex flex-col items-start gap-6 py-32">
        <Chip variant="banner" tilt>Error 404</Chip>
        <h1 className="m-0 font-display text-display-lg font-bold uppercase whitespace-pre-line text-ink">
          {"This page is\non a break."}
        </h1>
        <p className="m-0 max-w-[520px] font-body text-[18px] leading-7 text-body-text">
          We&apos;d build it, but it isn&apos;t clear anyone needs it. Try somewhere that exists.
        </p>
        <Link href="/"><Button size="lg" arrow>Back to Home</Button></Link>
      </div>
    </section>
  );
}
