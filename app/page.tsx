import { HeroSection } from "@/components/hero"
import { AboutSection } from "@/components/about"
import { TechStackSection } from "@/components/tech-stack"
import { ExperienceSection } from "@/components/experience"
import { EducationSection } from "@/components/education"
import { ProjectsSection } from "@/components/projects"

function SectionWrapper({
  children,
  alternate,
}: {
  children: React.ReactNode
  alternate?: boolean
}) {
  return (
    <div className={alternate ? "bg-muted/50" : ""}>
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
        <section id="contact" className="py-16">
          <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
          <p className="mt-4 text-muted-foreground">
            Feel free to reach out for collaborations or opportunities.
          </p>
          <div className="mt-4 space-y-1 text-sm text-muted-foreground">
            <p>Email: dipanjan.paul.iitkgp@gmail.com</p>
            <p>Phone: +91-6290272791</p>
          </div>
        </section>
      </SectionWrapper>
    </>
  )
}
