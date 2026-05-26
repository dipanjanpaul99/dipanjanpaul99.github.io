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
    <section id="tech-stack" className="py-16">
      <h2 className="text-2xl font-semibold tracking-tight">Tech Stack</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {techStack.map((category) => (
          <Card key={category.category}>
            <CardHeader>
              <CardTitle className="text-base">{category.category}</CardTitle>
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
