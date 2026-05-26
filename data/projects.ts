export interface Project {
  title: string
  description: string
  image?: string
  liveUrl?: string
  repoUrl?: string
  tags: string[]
  featured: boolean
}

export const projects: Project[] = [
  {
    title: "Global Value Chains & Structural Transformation",
    description:
      "Conducted theoretical research on GVC participation, synthesizing insights from 30+ academic papers and policy reports to examine structural transformation in developing economies.",
    tags: ["Economics", "Research", "Global Value Chains"],
    featured: true,
  },
  {
    title: "Billboard Hot 100 Analysis",
    description:
      "Led a data analytics project predicting Billboard Hot 100 song success using audio features. Performed EDA, data processing in Excel and R, and built classification models.",
    tags: ["Data Analytics", "R", "Excel", "Machine Learning"],
    featured: true,
  },
]
