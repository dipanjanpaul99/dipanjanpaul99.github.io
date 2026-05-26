import { personalInfo } from "@/data"

export function AboutSection() {
  return (
    <section id="about" className="py-16">
      <h2 className="text-2xl font-semibold tracking-tight">About</h2>
      <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <p className="text-muted-foreground leading-relaxed">
            {personalInfo.about}
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            {personalInfo.institution} · {personalInfo.email}
          </p>
        </div>
        <div className="flex items-center justify-center rounded-lg border-2 border-dashed border-border bg-muted/50 aspect-square md:aspect-auto">
          <span className="text-sm text-muted-foreground">Photo</span>
        </div>
      </div>
    </section>
  )
}
