import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Chip } from "@/components/ui/chip";
import { IconTile } from "@/components/ui/icon-tile";
import { LazyLoader } from "@/components/ui/lazy-loader";
import { DisplayHeading, Headline, SectionLabel } from "@/components/content/section-heading";
import { StatCard } from "@/components/content/stat-card";
import { Reveal } from "@/components/motion/reveal";
import { SERVICES } from "@/lib/constants";
import * as Icons from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="grid-paper border-b-2 border-ink">
        <div className="container-lbb grid items-center gap-12 py-24 lg:grid-cols-[7fr_5fr]">
          <div className="flex flex-col items-start gap-8">
            <Chip variant="status">System status: optimizing... (slowly)</Chip>
            <DisplayHeading as="h1">{"Lazy by Nature.\nBusy by Choice."}</DisplayHeading>
            <p className="m-0 max-w-[520px] font-body text-[18px] leading-7 text-body-text">
              We build ruthlessly efficient software — web, mobile, desktop — for any business that would rather go home
              early. Hard work is a bug, not a feature.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/tools">
                <Button size="lg" arrow>See the Tools</Button>
              </Link>
              <Link href="/manifesto">
                <Button size="lg" variant="secondary">Read the Manifesto</Button>
              </Link>
            </div>
          </div>

          <div className="relative justify-self-end">
            <div aria-hidden className="absolute -right-4 -bottom-4 size-30 bg-ink" />
            <div aria-hidden className="absolute -top-6 -left-6 size-20 rounded-full border-2 border-ink" />
            <Image
              src="/mascot/sloth-hero.jpg"
              alt="Sloth in an ergonomic chair, working hard at not working"
              width={380}
              height={380}
              priority
              className="relative size-[380px] object-cover grayscale shadow-[inset_0_0_0_2px_var(--color-ink)] shadow-hard-md"
            />
            <Chip variant="version" tilt className="absolute top-4 right-4">Chief Nap Officer</Chip>
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="border-b-2 border-ink bg-surface-alt">
        <div className="container-lbb grid gap-6 py-16 md:grid-cols-3">
          <StatCard value="38 HRS" label="Saved / client / week" description="Time your team gets back. Spend it wisely (or don't)." interactive />
          <StatCard value="0" label="Unnecessary meetings" description="Our software attends them for you." interactive />
          <StatCard value="100%" label="Uptime (when we're awake)" description="Aggressively monitored. Casually maintained." interactive />
        </div>
      </section>

      {/* SERVICES */}
      <section>
        <div className="container-lbb flex flex-col gap-12 py-24">
          <div className="flex flex-col items-start gap-4">
            <SectionLabel>What we build</SectionLabel>
            <Headline>Software for any business. Effort for none.</Headline>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06}>
                <Card interactive className="h-full">
                  <div className="flex flex-col items-start gap-5">
                    <IconTile name={s.icon as keyof typeof Icons} />
                    <h3 className="m-0 font-display text-headline-sm font-bold text-ink">{s.title}</h3>
                    <p className="m-0 font-body text-[16px] leading-6 text-body-text">{s.body}</p>
                    <span className="font-mono text-xs leading-4 font-medium uppercase text-ghost">{s.meta}</span>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OUR VIBE */}
      <section className="border-t-2 border-ink bg-surface-alt">
        <div className="container-lbb flex flex-col gap-12 py-24">
          <SectionLabel>Our vibe</SectionLabel>
          <div className="grid gap-6 lg:grid-cols-[5fr_7fr]">
            <Card surface="black">
              <div className="flex h-full flex-col justify-between gap-6">
                <span className="font-display text-headline-md font-bold uppercase text-white">
                  &ldquo;Hard work is a bug, not a feature.&rdquo;
                </span>
                <span className="font-mono text-[16px] leading-6 tracking-[1.6px] uppercase text-on-dark">
                  — The founders, probably napping
                </span>
              </div>
            </Card>
            <div className="flex flex-col gap-6">
              <Card className="p-6">
                <div className="flex flex-col gap-3">
                  <span className="font-mono text-xs leading-4 font-medium uppercase text-ink">Current workload</span>
                  <LazyLoader />
                </div>
              </Card>
              <Card dashed className="p-6">
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-xs leading-4 font-medium uppercase text-outline">The wrong way</span>
                  <p className="m-0 font-body text-[16px] leading-6 text-muted">
                    Hustle culture. 80-hour weeks. Standing desks used for standing. We studied it carefully so you never
                    have to.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t-2 border-ink bg-ink">
        <div className="container-lbb flex flex-col items-center gap-8 py-24 text-center">
          <h2 className="m-0 font-display text-display-lg font-bold uppercase whitespace-pre-line text-white">
            {"Got a business problem?\nWe'll solve it (efficiently)."}
          </h2>
          <Link href="/contact">
            <Button variant="inverse" size="lg" arrow>Hire Us (Maybe)</Button>
          </Link>
          <span className="font-mono text-[16px] leading-6 tracking-[1.6px] uppercase text-ghost">
            Response time: 24 hours (business naps excluded)
          </span>
        </div>
      </section>
    </>
  );
}
