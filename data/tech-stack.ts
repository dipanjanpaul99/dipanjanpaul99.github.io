export interface TechCategory {
  category: string
  items: string[]
}

export const techStack: TechCategory[] = [
  {
    category: "Data & Analytics",
    items: ["Excel", "R", "SQL", "Data Visualization", "EDA"],
  },
  {
    category: "Research & Tools",
    items: ["PitchBook", "Crunchbase", "Bloomberg Terminal", "Financial Modeling"],
  },
  {
    category: "Certifications",
    items: [
      "Bloomberg Market Concepts",
      "Bloomberg Finance Fundamentals",
      "Google Data Analytics Professional",
    ],
  },
  {
    category: "Domains",
    items: ["BFSI Research", "ESG Analysis", "Investment Analysis", "Portfolio Management"],
  },
]
