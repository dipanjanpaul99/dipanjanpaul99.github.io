import { ArrowRightIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { personalInfo } from "@/data"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[85vh] items-center justify-center overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_oklch(0.74_0.19_55_/_0.08),_transparent_60%)]" />
      <div className="relative text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Economics Researcher &amp; Data Analytics Professional
        </p>
        <h1 className="font-heading text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          {personalInfo.name}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Gold Medallist economist turned MBA candidate at IIT Kharagpur.
          Specializing in financial research, data analytics, and investment
          analysis — blending rigorous quantitative skills with business
          strategy.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <Button
            size="lg"
            className="gap-2 rounded-full px-6 text-base font-semibold"
            asChild
          >
            <a href="#projects">
              View my Work
              <ArrowRightIcon data-icon="inline-end" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-6 text-base"
            asChild
          >
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
