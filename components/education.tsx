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
    <section id="education" className="py-16">
      <h2 className="text-2xl font-semibold tracking-tight">Education</h2>
      <div className="mt-8 space-y-6">
        {education.map((edu) => (
          <Card key={`${edu.institution}-${edu.degree}`}>
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <CardTitle className="text-base">{edu.degree}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {edu.institution}
                  </p>
                </div>
                <Badge variant="outline" className="shrink-0">
                  {edu.startDate} - {edu.endDate}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              {edu.description && (
                <p className="text-sm text-muted-foreground">
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
