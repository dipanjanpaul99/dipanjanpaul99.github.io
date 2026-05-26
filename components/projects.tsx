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
    <section id="projects" className="py-16">
      <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.title} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-base">{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="mt-4 flex gap-2">
                {project.liveUrl && (
                  <Button variant="default" size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  </Button>
                )}
                {project.repoUrl && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
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
