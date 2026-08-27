import type { Metadata } from "next";
import Link from "next/link";
import * as Icons from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Chip } from "@/components/ui/chip";
import { IconTile } from "@/components/ui/icon-tile";
import { LazyLoader } from "@/components/ui/lazy-loader";
import { DisplayHeading, Headline, SectionLabel } from "@/components/content/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { EXPERIMENTS } from "@/lib/constants";

export const metadata: Metadata = { title: "The Lab" };

export default function LabPage() {
  return (
    <>
      <section className="grid-paper border-b-2 border-ink">
        <div className="container-lbb flex flex-col items-start gap-6 py-20">
          <SectionLabel>The lab</SectionLabel>
          <DisplayHeading as="h1">{"Experiments in\ndoing less."}</DisplayHeading>
          <p className="m-0 max-w-[640px] font-body text-[18px] leading-7 text-body-text">
            Unsupervised scripts, questionable prototypes, and one project we legally abandoned. Everything here is
            experimental. Some of it works.
          </p>
          <LazyLoader label="RUNNING EXPERIMENTS... (UNSUPERVISED)" className="w-full max-w-[480px]" />
        </div>
      </section>

      <section>
        <div className="container-lbb grid gap-6 py-20 lg:grid-cols-2">
          {EXPERIMENTS.map((e, i) => (
            <Reveal key={e.name} delay={i * 0.05}>
              <Card dashed={e.dead} interactive={!e.dead} className="h-full">
                <div className="flex flex-col items-start gap-5">
                  <div className="flex w-full items-start justify-between gap-4">
                    <IconTile name={e.icon as keyof typeof Icons} size={48} />
                    <Chip variant="status">{e.status}</Chip>
                  </div>
                  <h3 className={`m-0 font-display text-headline-sm font-bold ${e.dead ? "text-outline" : "text-ink"}`}>{e.name}</h3>
                  <p className={`m-0 font-body text-[16px] leading-6 ${e.dead ? "text-muted" : "text-body-text"}`}>{e.desc}</p>
                  <span className="font-mono text-xs leading-4 font-medium uppercase text-ghost">{e.log}</span>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t-2 border-ink bg-ink">
        <div className="container-lbb grid items-center gap-12 py-20 lg:grid-cols-2">
          <div className="flex flex-col items-start gap-6">
            <Headline className="text-white">Want an experiment built for your business?</Headline>
            <Link href="/contact"><Button variant="inverse" size="lg" arrow>Fund Our Laziness</Button></Link>
          </div>
          <div className="flex flex-col gap-3 p-8 font-mono text-[16px] leading-7 text-on-dark shadow-[inset_0_0_0_2px_var(--color-white)]">
            <span className="text-ghost">// lab terminal</span>
            <span>&gt; sudo generate --target=&quot;PM&quot;</span>
            <span>&gt; excuse compiled in 0.02s</span>
            <span className="text-white">&quot;IT&apos;S BASICALLY DONE, JUST POLISHING.&quot;</span>
          </div>
        </div>
      </section>
    </>
  );
}
