import {
  metrics,
  expertise,
  experience,
  verticals,
  toolGroups,
  certifications,
  exposure,
  profile,
  services,
  results,
  processSteps,
  relocation,
} from "@/lib/portfolio-data"
import { Award, Globe, ArrowUpRight, CheckCircle2, Mail, Phone, MessageCircle, TrendingUp, Plane, MapPin } from "lucide-react"

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-8 text-sm font-semibold uppercase tracking-widest text-primary">
      {children}
    </h2>
  )
}

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-12 lg:py-24">
      <SectionHeading>About</SectionHeading>
      <div className="space-y-5 text-pretty leading-relaxed text-muted-foreground">
        <p>
          I&apos;m a{" "}
          <span className="font-medium text-foreground">
            Senior Affiliate Manager &amp; Performance Marketing professional
          </span>{" "}
          with <span className="font-medium text-foreground">7+ years</span> of experience driving
          revenue growth across <span className="font-medium text-foreground">30+ international markets</span>,
          including Tier 1 countries like the US, UK, CA, and AU.
        </p>
        <p>
          At <span className="font-medium text-foreground">Social Pie Technologies</span>, I was
          promoted from Digital Marketing Specialist to Marketing Team Lead — building and scaling
          affiliate programs, managing multi-channel paid media campaigns, and leading a team of 7
          across E-commerce, Health &amp; Beauty, Sports &amp; Outdoor, Travel, and Home &amp; Garden
          verticals.
        </p>
        <p>
          I combine <span className="font-medium text-foreground">data-driven strategy</span> with
          hands-on execution, marketing automation, and{" "}
          <span className="font-medium text-foreground">hands-on client management</span> — owning
          relationships end-to-end with transparent reporting that keeps international stakeholders
          aligned and accounts growing.
        </p>
        <p>
          I&apos;m{" "}
          <span className="font-medium text-foreground">
            actively seeking an employer who can sponsor a work visa and support relocation
          </span>{" "}
          — ready to bring this global experience on-site to teams in the US, UK, Canada, Australia,
          the Gulf, and Europe.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {verticals.map((v) => (
          <span
            key={v}
            className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-foreground"
          >
            {v}
          </span>
        ))}
      </div>
    </section>
  )
}

export function Metrics() {
  return (
    <section id="metrics" className="scroll-mt-24 py-12 lg:py-16">
      <SectionHeading>Career Highlights</SectionHeading>
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
        {metrics.map((m) => (
          <div key={m.label} className="bg-card p-6 transition-colors hover:bg-accent">
            <div className="text-3xl font-bold tracking-tight text-foreground">{m.value}</div>
            <div className="mt-1 text-xs leading-snug text-muted-foreground">{m.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-12 lg:py-16">
      <SectionHeading>What I Can Do For You</SectionHeading>
      <div className="grid gap-4 sm:grid-cols-2">
        {services.map((s) => (
          <div
            key={s.title}
            className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
          >
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
              <TrendingUp className="size-3.5" aria-hidden="true" />
              {s.outcome}
            </span>
            <h3 className="mt-4 font-semibold text-foreground">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export function Results() {
  return (
    <section id="results" className="scroll-mt-24 py-12 lg:py-16">
      <SectionHeading>Selected Results</SectionHeading>
      <div className="space-y-px overflow-hidden rounded-xl border border-border bg-border">
        {results.map((r) => (
          <div
            key={r.title}
            className="flex flex-col gap-2 bg-card p-6 transition-colors hover:bg-accent sm:flex-row sm:items-baseline sm:gap-6"
          >
            <div className="shrink-0 text-3xl font-bold tracking-tight text-primary sm:w-28">
              {r.metric}
            </div>
            <div>
              <h3 className="font-semibold text-foreground">{r.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{r.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export function Process() {
  return (
    <section id="process" className="scroll-mt-24 py-12 lg:py-16">
      <SectionHeading>How I Work</SectionHeading>
      <div className="grid gap-4 sm:grid-cols-2">
        {processSteps.map((p) => (
          <div key={p.step} className="rounded-xl border border-border bg-card p-6">
            <span className="text-sm font-bold tracking-widest text-primary/70">{p.step}</span>
            <h3 className="mt-2 font-semibold text-foreground">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export function Expertise() {
  return (
    <section id="expertise" className="scroll-mt-24 py-12 lg:py-16">
      <SectionHeading>What I Do</SectionHeading>
      <div className="grid gap-4 sm:grid-cols-2">
        {expertise.map((item) => (
          <div
            key={item.title}
            className="group rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/50"
          >
            <h3 className="font-semibold text-foreground">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export function Relocation() {
  return (
    <section id="relocation" className="scroll-mt-24 py-12 lg:py-16">
      <SectionHeading>Visa Sponsorship &amp; Relocation</SectionHeading>
      <div className="overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 to-card p-6 sm:p-8">
        <div className="flex items-start gap-3">
          <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
            <Plane className="size-5" aria-hidden="true" />
          </span>
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/15 px-2.5 py-0.5 text-xs font-semibold text-primary">
              <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
              {relocation.badge}
            </span>
            <h3 className="mt-1.5 text-pretty text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              {relocation.headline}
            </h3>
          </div>
        </div>
        <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          {relocation.intro}
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {relocation.regions.map((r) => (
            <div
              key={r.region}
              className="flex items-start gap-2.5 rounded-xl border border-border bg-card p-4"
            >
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold text-foreground">{r.region}</p>
                <p className="text-xs text-muted-foreground">{r.note}</p>
              </div>
            </div>
          ))}
        </div>

        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {relocation.points.map((point) => (
            <li key={point} className="flex items-start gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-12 lg:py-16">
      <SectionHeading>Experience</SectionHeading>
      <ol className="relative space-y-8 border-l border-border pl-6">
        {experience.map((job) => (
          <li key={job.period + job.role} className="relative">
            <span
              className="absolute -left-[27px] top-1.5 size-3 rounded-full border-2 border-primary bg-background"
              aria-hidden="true"
            />
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {job.period}
            </p>
            <h3 className="mt-1 flex flex-wrap items-center gap-2 text-base font-semibold text-foreground">
              {job.role}
              {job.note && (
                <span className="rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-primary">
                  {job.note}
                </span>
              )}
            </h3>
            <p className="text-sm font-medium text-primary">{job.company}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{job.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {job.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-secondary px-2 py-1 text-[11px] font-medium text-secondary-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

export function Stack() {
  return (
    <section id="stack" className="scroll-mt-24 py-12 lg:py-16">
      <SectionHeading>Tech Stack &amp; Tools</SectionHeading>
      <div className="space-y-6">
        {toolGroups.map((group) => (
          <div key={group.category}>
            <h3 className="mb-3 text-sm font-medium text-foreground">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-md border border-border bg-card px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export function Credentials() {
  return (
    <section id="credentials" className="scroll-mt-24 py-12 lg:py-16">
      <SectionHeading>Credentials &amp; Global Exposure</SectionHeading>

      <div className="grid gap-4 sm:grid-cols-2">
        {certifications.map((cert) => (
          <div
            key={cert.name}
            className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
          >
            <Award className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
            <div>
              <p className="text-sm font-medium leading-snug text-foreground">{cert.name}</p>
              <p className="text-xs text-muted-foreground">{cert.issuer}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-xl border border-border bg-card p-6">
        <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold text-foreground">
          <Globe className="size-4 text-primary" aria-hidden="true" />
          International Exposure
        </h3>
        <ul className="space-y-3">
          {exposure.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-12 lg:py-24">
      <div className="rounded-2xl border border-border bg-gradient-to-br from-card to-background p-8 sm:p-10">
        <h2 className="text-pretty text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Let&apos;s build your next growth engine.
        </h2>
        <p className="mt-3 max-w-md text-pretty leading-relaxed text-muted-foreground">
          Open to Senior Affiliate Manager, Performance Marketing Manager, and Digital Marketing
          Manager roles. Actively seeking an employer who can sponsor a work visa and support
          relocation — and available immediately for remote work in the meantime.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/50"
          >
            <span className="inline-flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Mail className="size-4" aria-hidden="true" />
            </span>
            <span className="min-w-0">
              <span className="block text-xs uppercase tracking-wide text-muted-foreground">Email</span>
              <span className="block truncate text-sm font-medium text-foreground">{profile.email}</span>
            </span>
          </a>
          <a
            href={`tel:${profile.phoneHref}`}
            className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/50"
          >
            <span className="inline-flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Phone className="size-4" aria-hidden="true" />
            </span>
            <span className="min-w-0">
              <span className="block text-xs uppercase tracking-wide text-muted-foreground">Phone</span>
              <span className="block truncate text-sm font-medium text-foreground">{profile.phone}</span>
            </span>
          </a>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Mail className="size-4" aria-hidden="true" />
            Send an email
          </a>
          <a
            href={profile.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            WhatsApp
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            Connect on LinkedIn
            <ArrowUpRight className="size-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
      <p className="mt-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {profile.name}. Designed &amp; built with care.
      </p>
    </section>
  )
}
