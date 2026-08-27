import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import * as Icons from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Chip } from "@/components/ui/chip";
import { DisplayHeading, SectionLabel } from "@/components/content/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { TEAM, TIMELINE } from "@/lib/constants";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <section className="grid-paper border-b-2 border-ink">
        <div className="container-lbb grid items-center gap-12 py-20 lg:grid-cols-[7fr_5fr]">
          <div className="flex flex-col items-start gap-6">
            <SectionLabel>About us</SectionLabel>
            <DisplayHeading as="h1">{"Professional slackers.\nProven results."}</DisplayHeading>
            <p className="m-0 max-w-[560px] font-body text-[18px] leading-7 text-body-text">
              A small team of engineers and designers who got tired of watching businesses do things by hand. So we
              automated our own jobs first, then started selling the leftovers.
            </p>
          </div>
          <div className="relative justify-self-end">
            <div aria-hidden className="absolute -bottom-4 -left-4 size-25 bg-ink" />
            <Image
              src="/logo/logo-sloth-square.jpg"
              alt="Lazy But Busy sloth mascot"
              width={320}
              height={320}
              className="relative size-[320px] rounded-lg object-cover grayscale shadow-[inset_0_0_0_2px_var(--color-ink)] shadow-hard-md"
            />
          </div>
        </div>
      </section>

      <section className="border-b-2 border-ink">
        <div className="container-lbb flex flex-col gap-12 py-20">
          <SectionLabel>The team (placeholders, like our standups)</SectionLabel>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {TEAM.map((m, i) => {
              const Icon = (Icons[m.icon as keyof typeof Icons] ?? Icons.User) as React.ComponentType<{ size?: number }>;
              return (
                <Reveal key={m.name} delay={i * 0.05}>
                  <Card interactive className="h-full p-6">
                    <div className="flex flex-col items-start gap-4">
                      <div className="flex aspect-square w-full items-center justify-center bg-surface-alt text-ghost shadow-[inset_0_0_0_2px_var(--color-ink)]">
                        <Icon size={48} />
                      </div>
                      <div className="flex flex-col gap-1">
                        <h3 className="m-0 font-display text-[20px] leading-7 font-bold tracking-[-0.8px] text-ink">{m.name}</h3>
                        <span className="font-mono text-xs leading-4 font-medium uppercase text-muted">{m.role}</span>
                      </div>
                      <p className="m-0 font-body text-[14px] leading-5 text-body-text">{m.bio}</p>
                      <Chip variant="version">{m.status}</Chip>
                    </div>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-b-2 border-ink bg-surface-alt">
        <div className="container-lbb flex flex-col gap-12 py-20">
          <SectionLabel>How we got here</SectionLabel>
          <div className="flex flex-col border-b border-ink">
            {TIMELINE.map((t) => (
              <div key={t.year} className="grid items-baseline gap-6 border-t border-ink py-6 lg:grid-cols-[160px_1fr]">
                <span className="font-mono text-[16px] leading-6 font-medium tracking-[1.6px] text-ink">{t.year}</span>
                <div className="flex flex-col gap-1">
                  <h3 className="m-0 font-display text-[20px] leading-7 font-bold tracking-[-0.8px] uppercase text-ink">{t.title}</h3>
                  <p className="m-0 font-body text-[16px] leading-6 text-body-text">{t.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink">
        <div className="container-lbb flex flex-col items-center gap-8 py-20 text-center">
          <h2 className="m-0 font-display text-display-lg font-bold uppercase text-white">Want us on your problem?</h2>
          <Link href="/contact"><Button variant="inverse" size="lg" arrow>Hire Us (Maybe)</Button></Link>
        </div>
      </section>
    </>
  );
}
