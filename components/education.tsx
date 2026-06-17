import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { education } from "@/data"

export function EducationSection() {
  return (
    <section id="education" className="py-20">
      <h2 className="font-heading section-accent text-3xl font-bold tracking-tight">
        Education
      </h2>
      <div className="mt-8 space-y-6">
        {education.map((edu) => (
          <Card
            key={`${edu.institution}-${edu.degree}`}
            className="transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_30px_oklch(0.74_0.19_55_/_0.06)]"
          >
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <CardTitle className="text-base font-semibold">
                    {edu.degree}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {edu.institution}
                  </p>
                </div>
                <Badge variant="outline" className="shrink-0">
                  {edu.startDate} — {edu.endDate}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              {edu.description && (
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {edu.description}
                </p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
