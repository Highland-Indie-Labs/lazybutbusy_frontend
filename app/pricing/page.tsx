import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Chip } from "@/components/ui/chip";
import { DisplayHeading, Headline, SectionLabel } from "@/components/content/section-heading";
import { ListItem, OkItem } from "@/components/content/list-item";
import { FaqAccordion } from "@/components/pricing/faq-accordion";
import { Reveal } from "@/components/motion/reveal";
import { TIERS } from "@/lib/constants";

export const metadata: Metadata = { title: "Pricing" };

export default function PricingPage() {
  return (
    <>
      <section className="grid-paper border-b-2 border-ink">
        <div className="container-lbb flex flex-col items-start gap-6 py-20">
          <SectionLabel>Pricing</SectionLabel>
          <DisplayHeading as="h1">{"Pay for results.\nNot for effort."}</DisplayHeading>
          <p className="m-0 max-w-[640px] font-body text-[18px] leading-7 text-body-text">
            Three packages, one custom option. All prices are sample numbers until you talk to us (we kept the
            spreadsheet closed on purpose).
          </p>
        </div>
      </section>

      <section className="border-b-2 border-ink">
        <div className="container-lbb grid items-stretch gap-6 py-20 lg:grid-cols-3">
          {TIERS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.06} className="h-full">
              <Card surface={t.featured ? "dark" : "paper"} interactive className="flex h-full flex-col">
                <div className="flex h-full flex-col items-start gap-6">
                  <Chip variant={t.featured ? "tag" : "version"}>{t.tag}</Chip>
                  <h2 className={`m-0 font-display text-headline-md font-bold uppercase ${t.featured ? "text-white" : "text-ink"}`}>
                    {t.name}
                  </h2>
                  <div className="flex flex-col gap-1">
                    <span className={`font-display text-display-lg font-bold ${t.featured ? "text-white" : "text-ink"}`}>{t.price}</span>
                    <span className="font-mono text-xs leading-4 font-medium uppercase text-ghost">{t.per}</span>
                  </div>
                  <p className={`m-0 font-body text-[16px] leading-6 ${t.featured ? "text-on-dark" : "text-body-text"}`}>{t.desc}</p>
                  <div className="flex flex-1 flex-col gap-2.5">
                    {t.points.map((p) => (t.featured ? <OkItem key={p}>{p}</OkItem> : <ListItem key={p}>{p}</ListItem>))}
                  </div>
                  <Link href="/contact" className="w-full">
                    <Button variant={t.featured ? "inverse" : "secondary"} block arrow>{t.cta}</Button>
                  </Link>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-b-2 border-ink bg-surface-alt">
        <div className="container-lbb grid items-center gap-12 py-16 lg:grid-cols-[7fr_5fr]">
          <div className="flex flex-col items-start gap-4">
            <Headline>Something weirder? Custom quote.</Headline>
            <p className="m-0 max-w-[520px] font-body text-[18px] leading-7 text-body-text">
              Every business has one workflow that makes everyone sigh. Describe yours and we&apos;ll quote exactly what
              it costs to never think about it again.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4">
            <Link href="/contact"><Button size="lg" arrow>Request a Quote</Button></Link>
            <span className="font-mono text-xs leading-4 font-medium uppercase text-ghost">Quotes in 48h. Naps permitting.</span>
          </div>
        </div>
      </section>

      <section>
        <div className="container-lbb flex flex-col gap-12 py-20">
          <SectionLabel>FAQ (reluctantly)</SectionLabel>
          <FaqAccordion />
        </div>
      </section>
    </>
  );
}
