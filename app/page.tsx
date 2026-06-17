import { HeroSection } from "@/components/hero"
import { AboutSection } from "@/components/about"
import { TechStackSection } from "@/components/tech-stack"
import { ExperienceSection } from "@/components/experience"
import { EducationSection } from "@/components/education"
import { ProjectsSection } from "@/components/projects"
import { personalInfo } from "@/data"

function SectionWrapper({
  children,
  alternate,
}: {
  children: React.ReactNode
  alternate?: boolean
}) {
  return (
    <div className={alternate ? "bg-muted/30" : ""}>
      <div className="mx-auto max-w-5xl px-4">{children}</div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <SectionWrapper alternate>
        <AboutSection />
      </SectionWrapper>
      <SectionWrapper>
        <TechStackSection />
      </SectionWrapper>
      <SectionWrapper alternate>
        <ExperienceSection />
      </SectionWrapper>
      <SectionWrapper>
        <ProjectsSection />
      </SectionWrapper>
      <SectionWrapper alternate>
        <EducationSection />
      </SectionWrapper>
      <SectionWrapper>
        <section id="contact" className="py-20">
          <h2 className="font-heading section-accent text-3xl font-bold tracking-tight">
            Contact
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Feel free to reach out for collaborations or opportunities.
          </p>
          <div className="mt-6 flex flex-col gap-2 text-sm">
            <p className="text-muted-foreground">
              Email:{" "}
              <a
                href={`mailto:${personalInfo.email}`}
                className="font-medium text-foreground underline underline-offset-4 decoration-primary/30 hover:decoration-primary transition-all"
              >
                {personalInfo.email}
              </a>
            </p>
            <p className="text-muted-foreground">
              Phone:{" "}
              <span className="font-medium text-foreground">
                {personalInfo.phone}
              </span>
            </p>
          </div>
        </section>
      </SectionWrapper>
    </>
  )
}
