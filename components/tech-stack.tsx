import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { techStack } from "@/data"

export function TechStackSection() {
  return (
    <section id="tech-stack" className="py-20">
      <h2 className="font-heading section-accent text-3xl font-bold tracking-tight">
        Tech Stack
      </h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {techStack.map((category) => (
          <Card
            key={category.category}
            className="transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_oklch(0.74_0.19_55_/_0.08)]"
          >
            <CardHeader>
              <CardTitle className="text-base font-semibold">
                {category.category}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <Badge key={item} variant="secondary">
                    {item}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
