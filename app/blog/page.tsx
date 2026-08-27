import type { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Chip } from "@/components/ui/chip";
import { LazyLoader } from "@/components/ui/lazy-loader";
import { DisplayHeading, SectionLabel } from "@/components/content/section-heading";
import { POSTS } from "@/lib/constants";

export const metadata: Metadata = { title: "Blog" };

export default function BlogPage() {
  return (
    <>
      <section className="grid-paper border-b-2 border-ink">
        <div className="container-lbb flex flex-col items-start gap-6 py-20">
          <SectionLabel>The blog</SectionLabel>
          <DisplayHeading as="h1">{"Words, published\noccasionally."}</DisplayHeading>
          <Chip variant="status">Editorial calendar: vibes-based</Chip>
        </div>
      </section>

      <section>
        <div className="container-lbb flex flex-col gap-6 py-20">
          {POSTS.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="no-underline">
              <Card interactive>
                <div className="grid items-center gap-8 lg:grid-cols-[160px_1fr_auto]">
                  <div className="flex flex-col gap-2">
                    <span className="font-mono text-xs leading-4 font-medium uppercase text-ghost">{p.date}</span>
                    <Chip variant="tag">{p.tag}</Chip>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="m-0 font-display text-[28px] leading-9 font-bold tracking-[-1.12px] text-ink">{p.title}</h2>
                    <p className="m-0 font-body text-[16px] leading-6 text-body-text">{p.excerpt}</p>
                  </div>
                  <span className="font-mono text-xs leading-4 font-medium whitespace-nowrap uppercase text-muted">{p.read}</span>
                </div>
              </Card>
            </Link>
          ))}

          <Card dashed>
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="flex flex-col gap-1">
                <span className="font-mono text-xs leading-4 font-medium uppercase text-outline">Placeholder titles</span>
                <p className="m-0 font-body text-[16px] leading-6 text-muted">
                  Real post titles arriving whenever you send them. The layout will wait. It&apos;s good at waiting.
                </p>
              </div>
              <LazyLoader label="AWAITING CONTENT... (NO RUSH)" className="w-[280px]" />
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}
