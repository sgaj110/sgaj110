import { IntroPanel } from "@/components/intro-panel"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  About,
  Metrics,
  Services,
  Results,
  Expertise,
  Process,
  Relocation,
  Experience,
  Stack,
  Credentials,
  Contact,
} from "@/components/sections"

export default function Page() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 lg:px-12">
      <ThemeToggle />
      <div className="lg:flex lg:justify-between lg:gap-12">
        <IntroPanel />
        <div className="pt-12 lg:w-[56%] lg:py-24">
          <About />
          <Metrics />
          <Services />
          <Results />
          <Expertise />
          <Process />
          <Relocation />
          <Experience />
          <Stack />
          <Credentials />
          <Contact />
        </div>
      </div>
    </main>
  )
}
