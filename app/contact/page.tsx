import type { Metadata } from "next";
import { LazyLoader } from "@/components/ui/lazy-loader";
import { DisplayHeading, SectionLabel } from "@/components/content/section-heading";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata: Metadata = { title: "Hire Us (Maybe)" };

export default function ContactPage() {
  return (
    <section className="grid-paper">
      <div className="container-lbb grid items-start gap-12 py-20 lg:grid-cols-[5fr_7fr]">
        <div className="flex flex-col items-start gap-8">
          <SectionLabel>Contact</SectionLabel>
          <DisplayHeading as="h1">{"Hire us\n(maybe)."}</DisplayHeading>
          <p className="m-0 max-w-[420px] font-body text-[18px] leading-7 text-body-text">
            Tell us the most annoying part of running your business. We&apos;ll reply within 24 hours with either a plan
            or a very good excuse.
          </p>
          <div className="flex flex-col gap-3">
            <a href="mailto:hello@lazybutbusy.com" className="font-mono text-[16px] leading-6 font-medium tracking-[1.6px] uppercase text-ink">
              hello@lazybutbusy.com
            </a>
            <span className="font-mono text-xs leading-4 font-medium uppercase text-ghost">
              Response time: 24h (business naps excluded)
            </span>
          </div>
          <LazyLoader label="INBOX STATUS: MOSTLY EMPTY" className="w-full max-w-[360px]" />
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
