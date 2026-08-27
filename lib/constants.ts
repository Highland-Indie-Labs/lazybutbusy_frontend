import type { Product, Tier } from "@/types";

export const NAV_LINKS = [
  { label: "Tools", href: "/tools" },
  { label: "Manifesto", href: "/manifesto" },
  { label: "The Lab", href: "/lab" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
] as const;

export const CTA_LABEL = "Hire Us (Maybe)";

export const SERVICES = [
  { icon: "Globe", title: "Web Apps", body: "Dashboards, portals, storefronts. Loads fast, works always, asks nothing of you.", meta: "SHIPS IN WEEKS (NOT QUARTERS)" },
  { icon: "Smartphone", title: "Mobile Apps", body: "iOS and Android from one codebase, because writing things twice is hard work.", meta: "ONE CODEBASE. ZERO REGRETS." },
  { icon: "Terminal", title: "Automation & Desktop", body: "Internal tools that do the boring parts of your business while everyone naps.", meta: "RUNS WHILE YOU DON'T" },
] as const;

export const CLIENT_PRODUCTS = [
  {
    slug: "born-to-glow",
    name: "Born To Glow",
    icon: "Store",
    desc: "A cosmetic e-commerce system built for Myanmar shoppers — catalog, cart, payments, and order tracking that runs itself.",
    points: ["Full storefront + admin, zero busywork", "Built for Myanmar payments & delivery"],
    chip: "SAMPLE — LIVE DEMO SOON",
  },
  {
    slug: "l-key",
    name: "L Key",
    icon: "Music",
    desc: "A guitar chords viewer and tuning toolkit for every kind of guitarist — from campfire strummers to session pros.",
    points: ["Chord library + instant transpose", "Precision tuner, works offline"],
    chip: "SAMPLE — IN BETA",
  },
] as const;

export const OWN_TOOLS: Product[] = [
  { slug: "auto-napper", name: "The Auto-Napper", version: "v2.0 Beta", icon: "Moon", desc: "Schedules your deep-work blocks, silences everything, and answers Slack with plausible typing indicators.", points: ["Plausible-deniability mode", "Calendar camouflage"], status: "beta" },
  { slug: "meeting-mutiny", name: "Meeting Mutiny", version: "V 0.9.1", icon: "CalendarX", desc: "Audits every recurring meeting and auto-declines the ones an email could have been. Sends the email.", points: ["Could-have-been-an-email detector", "Auto-summary in 3 bullets"], status: "beta" },
  { slug: "status-randomizer", name: "Status Randomizer", version: "v1.3", icon: "Shuffle", desc: "Enterprise-grade status updates, generated. Sounds busy, technically true, fully compliant.", points: ["Jargon dial (0–11)", "PM-safe output"], status: "live" },
  { slug: "blame-generator", name: "Blame Generator", version: "v4.1", icon: "Bug", desc: "Root-cause analysis that always finds a root cause. Usually the intern. Sometimes DNS.", points: ["It's always DNS mode", "Postmortem autocomplete"], status: "live" },
  { slug: "coffee-break", name: "Coffee Break™", version: "v1.0", icon: "Coffee", desc: "Office logistics for the essentials: routes the fresh pot to whoever shipped something this week.", points: ["Merit-based caffeine", "Kettle API included"], status: "live" },
  { slug: "standing-desk-app", name: "The Standing Desk App", version: "v0.1 (RIP)", icon: "Skull", desc: "It reminded people to stand. Nobody stood. We respected that.", points: ["Abandoned with dignity", "0 daily active standers"], status: "abandoned" },
];

export const EXPERIMENTS = [
  { name: "Netflix Auto-Watcher", icon: "Tv", status: "LIVE (SOMEHOW)", desc: "Watches your shows and writes a recap so you can nap through prestige television guilt-free.", log: "LAST RUN: 6 SEASONS, 0 MEMORIES", dead: false },
  { name: "Pizza Router", icon: "Pizza", status: "INCUBATING", desc: "Calculates the optimal pizza order for any team size, deadline, and level of despair.", log: "ACCURACY: 94% (PINEAPPLE EDGE CASES)", dead: false },
  { name: "Excuse Gen", icon: "Terminal", status: "LIVE (SOMEHOW)", desc: "The original excuse generator. Now with quarterly-review mode and plausible weather events.", log: "UPTIME: DEPENDS WHO'S ASKING", dead: false },
  { name: 'Project "NOPE"', icon: "Skull", status: "ABANDONED", desc: "We can't tell you what it was. The name says everything you need to know.", log: "CAUSE OF DEATH: EFFORT REQUIRED", dead: true },
] as const;

export const MANIFESTO_GRIND = ["80-hour weeks as a personality", "Meetings about meetings", "Manual work a script could do", "Burnout as a KPI"] as const;
export const MANIFESTO_GLIDE = ["Automate everything automatable", "Ship it, then nap", "Meetings become emails become nothing", "Go home early. Every day."] as const;

export const PRINCIPLES = [
  { num: "01", title: "Automate first", body: "If a task happens twice, it gets a script. If it happens three times, it gets a product." },
  { num: "02", title: "Effort is expensive", body: "We spend it only where it compounds: architecture, tooling, and picking the right nap schedule." },
  { num: "03", title: "Boring tech wins", body: "Proven stacks, no drama. Excitement belongs in your business results, not your error logs." },
  { num: "04", title: "Done beats perfect", body: "Perfect is a moving target and we refuse to chase anything." },
] as const;

export const TIERS: Tier[] = [
  { tag: "THE NAP", name: "Sprint", price: "$4.9K", per: "PER PROJECT — SAMPLE PRICE", desc: "One focused problem, solved in 2–4 weeks.", points: ["One web or mobile app module", "Design + build + deploy", "Two revision rounds (we nap between)", "30 days of bug fixes"], cta: "Start a Sprint" },
  { tag: "MOST EFFICIENT", name: "Build", price: "$14K", per: "PER PRODUCT — SAMPLE PRICE", desc: "A full product, end to end. Like Born To Glow, but yours.", points: ["Full web/mobile product", "Admin dashboard included", "Payments, auth, the boring parts", "90 days of support", "Handover docs humans can read"], featured: true, cta: "Build a Product" },
  { tag: "THE HAMMOCK", name: "Retainer", price: "$2.4K", per: "PER MONTH — SAMPLE PRICE", desc: "We keep everything running while you do literally anything else.", points: ["Ongoing features + fixes", "Monitoring (we set alarms)", "Priority response: 24h", 'Monthly "still alive" report'], cta: "Stay Lazy" },
];

export const FAQS = [
  { q: "Are these prices real?", a: "They're sample numbers. Real quotes come after one short call where you describe the problem and we quietly estimate how automatable it is (usually: very)." },
  { q: "How fast do you actually ship?", a: "Sprint projects ship in 2–4 weeks. We're lazy about everything except deadlines — missing one creates more work later, and we refuse." },
  { q: "Do you work with businesses outside tech?", a: "Yes — that's most of our work. Retail, e-commerce, services. If your business has a repetitive task, it's our favorite kind of business." },
  { q: "What happens after launch?", a: "The Retainer tier exists so you never think about servers again. Otherwise we hand over clean code, documentation, and our sincere wishes." },
  { q: "Why should we trust a company that brags about being lazy?", a: "Lazy engineers automate, simplify, and document — because they never want to touch it twice. That's exactly who you want building your software." },
] as const;

export const TEAM = [
  { icon: "User", name: "Founder Placeholder", role: "CHIEF NAP OFFICER", bio: "Writes the vision docs, then automates reading them.", status: "STATUS: HORIZONTAL" },
  { icon: "Code", name: "Engineer Placeholder", role: "HEAD OF NOT DOING THINGS TWICE", bio: "Has never manually deployed anything. Refuses to start.", status: "STATUS: COMPILING" },
  { icon: "Palette", name: "Designer Placeholder", role: "DIRECTOR OF BLACK RECTANGLES", bio: "Believes every problem is solvable with a 2px border.", status: "STATUS: ALIGNING" },
  { icon: "Headset", name: "Ops Placeholder", role: "MEETING DECLINE SPECIALIST", bio: "Answers clients in under 24 hours. Answers Slack never.", status: "STATUS: OOO-ISH" },
] as const;

export const TIMELINE = [
  { year: "2023", title: "The incident", body: "A founder did the same spreadsheet task three days in a row. Legal action was considered. A script was written instead." },
  { year: "2024", title: "Company formed", body: "Lazy But Busy incorporated. First rule written into the bylaws: hard work is a bug, not a feature." },
  { year: "2025", title: "First client products", body: "Born To Glow ships for Myanmar e-commerce. L Key ships for guitarists everywhere. Both run while we nap." },
  { year: "2026", title: "Still here", body: "More clients, same headcount. That's the whole point." },
] as const;

export const POSTS = [
  { slug: "placeholder-1", date: "2026-08-12", tag: "ENGINEERING", title: "Placeholder Title #1", excerpt: "A future post about something we automated. Excerpt pending, like everything else here.", read: "6 MIN (ALLEGEDLY)" },
  { slug: "placeholder-2", date: "2026-07-30", tag: "PHILOSOPHY", title: "Placeholder Title #2", excerpt: "A future post defending naps with citations. The citations are also napping.", read: "4 MIN" },
  { slug: "placeholder-3", date: "2026-07-02", tag: "CASE STUDY", title: "Placeholder Title #3", excerpt: "A future post about a client project. Names redacted, hours saved bragged about.", read: "8 MIN" },
  { slug: "placeholder-4", date: "2026-06-15", tag: "LAB NOTES", title: "Placeholder Title #4", excerpt: "A future post from The Lab. Survivors will be interviewed.", read: "3 MIN" },
] as const;
