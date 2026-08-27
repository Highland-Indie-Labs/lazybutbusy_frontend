import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Chip } from "@/components/ui/chip";
import { DisplayHeading, SectionLabel } from "@/components/content/section-heading";
import { ListItem, OkItem } from "@/components/content/list-item";
import { StatCard } from "@/components/content/stat-card";
import { MANIFESTO_GLIDE, MANIFESTO_GRIND, PRINCIPLES } from "@/lib/constants";

export const metadata: Metadata = { title: "Manifesto" };

export default function ManifestoPage() {
  return (
    <>
      <section className="grid-paper border-b-2 border-ink">
        <div className="container-lbb flex flex-col items-start gap-6 py-20">
          <Chip variant="banner" tilt>Philosophy v1.0</Chip>
          <DisplayHeading as="h1">{"Hard work is a bug,\nnot a feature."}</DisplayHeading>
          <blockquote className="m-0 max-w-[640px] border-l-4 border-ink pl-6">
            <p className="m-0 font-body text-[18px] leading-7 text-body-text">
              Effort is a finite resource. We refuse to waste it on things a computer can do. Weaponizing laziness into
              peak efficiency — that&apos;s the whole business model.
            </p>
          </blockquote>
        </div>
      </section>

      {/* CHOOSE YOUR FIGHTER */}
      <section className="border-b-2 border-ink">
        <div className="container-lbb flex flex-col gap-12 py-20">
          <SectionLabel>Choose your fighter</SectionLabel>
          <div className="grid items-stretch gap-6 lg:grid-cols-2">
            <Card dashed>
              <div className="flex flex-col items-start gap-6">
                <span className="font-mono text-xs leading-4 font-medium uppercase text-outline">Option A — the busy way</span>
                <h2 className="m-0 font-display text-headline-md font-bold uppercase text-muted">The Grind</h2>
                <div className="flex flex-col gap-3">
                  {MANIFESTO_GRIND.map((g) => <ListItem key={g} kind="x">{g}</ListItem>)}
                </div>
                <Button variant="abandoned" disabled>Not Recommended</Button>
              </div>
            </Card>
            <Card surface="black">
              <div className="flex flex-col items-start gap-6">
                <span className="font-mono text-xs leading-4 font-medium uppercase text-ghost">Option B — the lazy way</span>
                <h2 className="m-0 font-display text-headline-md font-bold uppercase text-white">The Glide</h2>
                <div className="flex flex-col gap-3">
                  {MANIFESTO_GLIDE.map((g) => <OkItem key={g}>{g}</OkItem>)}
                </div>
                <Link href="/contact"><Button variant="inverse" arrow>Choose This One</Button></Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="border-b-2 border-ink bg-surface-alt">
        <div className="container-lbb flex flex-col gap-12 py-20">
          <SectionLabel>Engagement metrics</SectionLabel>
          <div className="grid gap-6 md:grid-cols-3">
            <StatCard value="40" label="Hours saved" description="Per client, per month. Minimum." />
            <StatCard value="0" label="F*cks given" description="About hustle culture, specifically." />
            <StatCard value="127%" label="Efficiency" description="We don't know how either. We stopped measuring." />
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section>
        <div className="container-lbb flex flex-col gap-12 py-20">
          <SectionLabel>The principles</SectionLabel>
          <div className="flex flex-col border-b border-ink">
            {PRINCIPLES.map((p) => (
              <div key={p.num} className="grid items-baseline gap-6 border-t border-ink py-8 lg:grid-cols-[120px_1fr_2fr]">
                <span className="font-display text-headline-lg font-bold text-ink">{p.num}</span>
                <h3 className="m-0 font-display text-headline-sm font-bold uppercase text-ink">{p.title}</h3>
                <p className="m-0 font-body text-[18px] leading-7 text-body-text">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t-2 border-ink bg-ink">
        <div className="container-lbb flex flex-col items-center gap-8 py-20 text-center">
          <h2 className="m-0 font-display text-display-lg font-bold uppercase text-white">Agree with all of this?</h2>
          <Link href="/contact"><Button variant="inverse" size="lg" arrow>Hire Us (Maybe)</Button></Link>
        </div>
      </section>
    </>
  );
}
