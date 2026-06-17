import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { experiences } from "@/data"

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <h2 className="font-heading section-accent text-3xl font-bold tracking-tight">
        Experience
      </h2>
      <div className="mt-8 space-y-6">
        {experiences.map((exp) => (
          <Card
            key={`${exp.company}-${exp.role}`}
            className="transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_30px_oklch(0.74_0.19_55_/_0.06)]"
          >
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <CardTitle className="text-base font-semibold">
                    {exp.role}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {exp.company}
                  </p>
                </div>
                <Badge variant="outline" className="shrink-0">
                  {exp.startDate} — {exp.endDate}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {exp.description}
              </p>
              {exp.highlights.length > 0 && (
                <ul className="mt-4 flex flex-col gap-2">
                  {exp.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-primary" />
                      {h}
                    </li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
