"use client"

import { useEffect, useState } from "react"
import { Linkedin, Mail, MapPin, ArrowUpRight, Phone } from "lucide-react"
import { profile, navItems } from "@/lib/portfolio-data"
import { cn } from "@/lib/utils"

export function IntroPanel() {
  const [active, setActive] = useState<string>("about")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: "-45% 0px -50% 0px" },
    )
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const handleNav = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[44%] lg:flex-col lg:justify-between lg:py-24 lg:pr-12">
      <div>
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
          Seeking employer visa sponsorship &amp; relocation
        </p>
        <h1 className="text-pretty text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {profile.name}
        </h1>
        <h2 className="mt-3 text-lg font-medium text-foreground/90">{profile.title}</h2>
        <p className="mt-4 max-w-sm text-pretty leading-relaxed text-muted-foreground">
          {profile.tagline}
        </p>

        <div className="mt-6 flex flex-col gap-2 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-2">
            <MapPin className="size-4 text-primary" aria-hidden="true" />
            {profile.location} · {profile.availability}
          </span>
          <a
            href={`tel:${profile.phoneHref}`}
            className="inline-flex w-fit items-center gap-2 transition-colors hover:text-primary"
          >
            <Phone className="size-4 text-primary" aria-hidden="true" />
            {profile.phone}
          </a>
        </div>

        {/* Desktop section nav */}
        <nav className="mt-16 hidden lg:block" aria-label="Section navigation">
          <ul className="space-y-4">
            {navItems.map(({ id, label }) => {
              const isActive = active === id
              return (
                <li key={id}>
                  <button
                    onClick={() => handleNav(id)}
                    className="group flex items-center gap-4 py-1"
                  >
                    <span
                      className={cn(
                        "h-px bg-muted-foreground/40 transition-all duration-300 group-hover:w-16 group-hover:bg-foreground",
                        isActive ? "w-16 bg-primary" : "w-8",
                      )}
                      aria-hidden="true"
                    />
                    <span
                      className={cn(
                        "text-xs font-semibold uppercase tracking-widest transition-colors",
                        isActive
                          ? "text-foreground"
                          : "text-muted-foreground group-hover:text-foreground",
                      )}
                    >
                      {label}
                    </span>
                  </button>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>

      <div className="mt-10 flex items-center gap-3">
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          <Mail className="size-4" aria-hidden="true" />
          Get in touch
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn profile"
          className="inline-flex items-center gap-1.5 rounded-md border border-border px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
        >
          <Linkedin className="size-4" aria-hidden="true" />
          LinkedIn
          <ArrowUpRight className="size-3.5" aria-hidden="true" />
        </a>
      </div>
    </header>
  )
}
