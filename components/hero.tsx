import { Button } from "@/components/ui/button"
import { personalInfo } from "@/data"

export function HeroSection() {
  return (
    <section id="hero" className="flex min-h-[80vh] items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          {personalInfo.name}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
          {personalInfo.tagline}
        </p>
        <p className="mt-6 max-w-2xl mx-auto text-muted-foreground leading-relaxed">
          Specializing in financial research, data analytics, and investment analysis — with hands-on experience profiling companies, tracking funding rounds, and evaluating financial statements at Netscribes. A Gold Medallist economist turned MBA candidate at IIT Kharagpur, blending rigorous quantitative skills with business strategy.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Button asChild>
            <a href="#projects">View my Work</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
