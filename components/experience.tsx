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
    <section id="experience" className="py-16">
      <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
      <div className="mt-8 space-y-6">
        {experiences.map((exp) => (
          <Card key={`${exp.company}-${exp.role}`}>
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <CardTitle className="text-base">{exp.role}</CardTitle>
                  <p className="text-sm text-muted-foreground">{exp.company}</p>
                </div>
                <Badge variant="outline" className="shrink-0">
                  {exp.startDate} - {exp.endDate}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{exp.description}</p>
              {exp.highlights.length > 0 && (
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                  {exp.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
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
