import { ExternalLinkIcon, CodeIcon } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { projects } from "@/data"

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <h2 className="font-heading section-accent text-3xl font-bold tracking-tight">
        Projects
      </h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card
            key={project.title}
            className="flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_oklch(0.74_0.19_55_/_0.08)]"
          >
            <CardHeader>
              <CardTitle className="text-base font-semibold">
                {project.title}
              </CardTitle>
              <CardDescription className="leading-relaxed">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="mt-auto flex gap-2 pt-4">
                {project.liveUrl && (
                  <Button variant="default" size="sm" asChild>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLinkIcon data-icon="inline-start" />
                      Live Demo
                    </a>
                  </Button>
                )}
                {project.repoUrl && (
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <CodeIcon data-icon="inline-start" />
                      Source
                    </a>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
