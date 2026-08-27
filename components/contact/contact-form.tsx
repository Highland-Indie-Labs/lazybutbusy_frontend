"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Chip } from "@/components/ui/chip";
import { Checkbox } from "@/components/ui/checkbox";
import { Input, Textarea } from "@/components/ui/input";
import { LazyLoader } from "@/components/ui/lazy-loader";
import { contactSchema, type ContactInput } from "@/lib/validations";

type Phase = "idle" | "sending" | "sent";

const NEEDS = [
  { value: "web", label: "Web app" },
  { value: "mobile", label: "Mobile app" },
  { value: "automation", label: "Automation" },
  { value: "unsure", label: "Not sure (honest)" },
] as const;

export function ContactForm() {
  const [phase, setPhase] = React.useState<Phase>("idle");
  const [ticket, setTicket] = React.useState("0000");
  const [serverError, setServerError] = React.useState("");

  const { register, handleSubmit, reset, formState } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", company: "", budget: "", needs: [], message: "" },
  });

  const onSubmit = async (values: ContactInput) => {
    setPhase("sending");
    setServerError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("send failed");
      const data: { ticket: string } = await res.json();
      setTicket(data.ticket);
      setPhase("sent");
    } catch {
      setServerError("ERROR: SEND FAILED. EVEN OUR EXCUSES HAVE EXCUSES. TRY AGAIN.");
      setPhase("idle");
    }
  };

  if (phase === "sent") {
    return (
      <Card>
        <div className="flex flex-col items-start gap-6">
          <Chip variant="banner" tilt>
            Request received
          </Chip>
          <h2 className="m-0 font-display text-headline-lg font-bold uppercase text-ink">We&apos;ll reply (eventually).</h2>
          <p className="m-0 font-body text-[18px] leading-7 text-body-text">
            Your problem is now officially our problem. Expect a reply within 24 hours — a plan, a quote, or a genuinely
            impressive excuse.
          </p>
          <div className="flex flex-col gap-2 font-mono text-[16px] leading-7 text-muted">
            <span>&gt; ticket #{ticket} created</span>
            <span>&gt; assigned to: whoever wakes up first</span>
            <span className="text-ink">STATUS: OPTIMIZING... (SLOWLY)</span>
          </div>
          <Button
            variant="secondary"
            onClick={() => {
              reset();
              setPhase("idle");
            }}
          >
            Send Another One
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6" noValidate>
        <span className="font-mono text-xs leading-4 font-medium tracking-[1.2px] uppercase text-muted">
          Project intake form (short, we promise)
        </span>

        <div className="grid gap-6 sm:grid-cols-2">
          <Input label="Your name" placeholder="Someone busy" error={formState.errors.name?.message} {...register("name")} />
          <Input label="Email" type="email" placeholder="you@company.com" error={formState.errors.email?.message} {...register("email")} />
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <Input label="Company (optional)" placeholder="Your business" {...register("company")} />
          <Input label="Budget ballpark (optional)" placeholder="$5K? $50K? Vibes?" {...register("budget")} />
        </div>

        <fieldset className="m-0 flex flex-col gap-3 border-0 p-0">
          <legend className="mb-1 p-0 font-mono text-xs leading-4 font-medium tracking-[1.2px] uppercase text-ink">
            What do you need?
          </legend>
          <div className="flex flex-wrap gap-6">
            {NEEDS.map((n) => (
              <Checkbox key={n.value} label={n.label} value={n.value} {...register("needs")} />
            ))}
          </div>
        </fieldset>

        <Textarea
          label="The annoying problem"
          placeholder="Describe the workflow that makes everyone sigh..."
          error={formState.errors.message?.message}
          {...register("message")}
        />

        {serverError && <span className="font-mono text-xs leading-4 font-medium uppercase text-error">{serverError}</span>}

        {phase === "sending" ? (
          <LazyLoader label="SENDING... (EVENTUALLY)" />
        ) : (
          <Button type="submit" size="lg" block arrow>
            Send It (We&apos;ll See It)
          </Button>
        )}
      </form>
    </Card>
  );
}
