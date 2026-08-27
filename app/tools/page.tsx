import type { Metadata } from "next";
import Link from "next/link";
import * as Icons from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Chip } from "@/components/ui/chip";
import { IconTile } from "@/components/ui/icon-tile";
import { DisplayHeading, Headline, SectionLabel } from "@/components/content/section-heading";
import { ListItem, OkItem } from "@/components/content/list-item";
import { Reveal } from "@/components/motion/reveal";
import { CLIENT_PRODUCTS, OWN_TOOLS } from "@/lib/constants";

export const metadata: Metadata = { title: "Tools" };

export default function ToolsPage() {
  return (
    <>
      <section className="grid-paper border-b-2 border-ink">
        <div className="container-lbb flex flex-col items-start gap-6 py-20">
          <SectionLabel>The tools</SectionLabel>
          <DisplayHeading as="h1">{"Software that works\nso you don't have to."}</DisplayHeading>
          <p className="m-0 max-w-[640px] font-body text-[18px] leading-7 text-body-text">
            Products we built for clients and for our own laziness. All of them do one thing extremely well: less.
          </p>
        </div>
      </section>

      {/* CLIENT PRODUCTS */}
      <section className="border-b-2 border-ink">
        <div className="container-lbb flex flex-col gap-8 py-20">
          <SectionLabel>Built for clients</SectionLabel>
          <div className="grid gap-6 lg:grid-cols-2">
            {CLIENT_PRODUCTS.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06}>
                <Card surface="dark" rounded interactive className="h-full">
                  <div className="flex flex-col items-start gap-5">
                    <div className="flex w-full items-start justify-between gap-4">
                      <IconTile name={p.icon as keyof typeof Icons} dark />
                      <Chip variant="tag">Client product</Chip>
                    </div>
                    <h3 className="m-0 font-display text-headline-md font-bold text-white">{p.name}</h3>
                    <p className="m-0 font-body text-[16px] leading-6 text-on-dark">{p.desc}</p>
                    <div className="flex flex-col gap-2">
                      {p.points.map((pt) => <OkItem key={pt}>{pt}</OkItem>)}
                    </div>
                    <span className="font-mono text-xs leading-4 font-medium uppercase text-ghost">{p.chip}</span>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OWN TOOLS */}
      <section>
        <div className="container-lbb flex flex-col gap-8 py-20">
          <SectionLabel>Our own tools</SectionLabel>
          <div className="grid gap-6 lg:grid-cols-2">
            {OWN_TOOLS.map((p, i) => {
              const dead = p.status === "abandoned";
              return (
                <Reveal key={p.slug} delay={i * 0.04}>
                  <Card rounded dashed={dead} interactive={!dead} className="h-full">
                    <div className="flex flex-col items-start gap-5">
                      <div className="flex w-full items-start justify-between gap-4">
                        <IconTile name={p.icon as keyof typeof Icons} />
                        <Chip variant="version">{p.version}</Chip>
                      </div>
                      <h3 className={`m-0 font-display text-headline-sm font-bold ${dead ? "text-outline" : "text-ink"}`}>
                        {p.name}
                      </h3>
                      <p className={`m-0 font-body text-[16px] leading-6 ${dead ? "text-muted" : "text-body-text"}`}>{p.desc}</p>
                      <div className="flex flex-col gap-2">
                        {p.points.map((pt) => <ListItem key={pt}>{pt}</ListItem>)}
                      </div>
                      {dead ? (
                        <Button variant="abandoned" disabled>Abandoned</Button>
                      ) : (
                        <Link href="/contact"><Button arrow>Try It (Whenever)</Button></Link>
                      )}
                    </div>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CUSTOM WORK */}
      <section className="border-t-2 border-ink bg-surface-alt">
        <div className="container-lbb grid items-center gap-12 py-20 lg:grid-cols-[7fr_5fr]">
          <div className="flex flex-col items-start gap-6">
            <SectionLabel>Custom work</SectionLabel>
            <Headline>None of these fit your business? We&apos;ll build one that does.</Headline>
            <p className="m-0 max-w-[520px] font-body text-[18px] leading-7 text-body-text">
              Web, mobile, desktop, automation. Tell us your most annoying workflow and we&apos;ll make it somebody
              else&apos;s problem (specifically, a computer&apos;s).
            </p>
            <Link href="/contact"><Button size="lg" arrow>Start a Project</Button></Link>
          </div>
          <Card surface="black">
            <div className="flex flex-col gap-3 font-mono text-[16px] leading-7 text-on-dark">
              <span className="text-ghost">// your future stack</span>
              <span>&gt; sudo generate --target=&quot;YOUR_BUSINESS&quot;</span>
              <span>&gt; deploying effort... 2%</span>
              <span>&gt; deploying results... 100%</span>
              <span className="text-white">DONE. GO HOME EARLY.</span>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}
