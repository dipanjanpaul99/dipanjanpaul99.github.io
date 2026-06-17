import { personalInfo } from "@/data"

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <h2 className="font-heading section-accent text-3xl font-bold tracking-tight">
        About
      </h2>
      <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-3">
        <div className="md:col-span-2">
          <p className="text-lg leading-8 text-muted-foreground">
            {personalInfo.about}
          </p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">
              {personalInfo.institution}
            </span>
            <span className="text-muted-foreground/60">·</span>
            <span>{personalInfo.email}</span>
          </div>
        </div>
        <div className="flex items-center justify-center rounded-xl border border-border bg-gradient-to-br from-primary/10 to-accent/10 aspect-square">
          <span className="text-sm text-muted-foreground">Photo</span>
        </div>
      </div>
    </section>
  )
}
