export interface Experience {
  role: string
  company: string
  location?: string
  startDate: string
  endDate: string
  description: string
  highlights: string[]
}

export const experiences: Experience[] = [
  {
    role: "Associate - Info Services",
    company: "Netscribes Data & Insights Private Limited",
    startDate: "Apr 2024",
    endDate: "Jul 2024",
    description:
      "Banking, Financial Services, and Insurance (BFSI) research team.",
    highlights: [
      "Analyzed and profiled 45+ companies daily using Excel, PitchBook, Crunchbase, and press releases, strengthening client databases and research deliverables.",
      "Classified funding types (seed, series, angel, equity crowdfunding) and tracked funding rounds worth over $15 million.",
      "Designed an Excel-based deal-tracking system monitoring 100+ corporate actions (M&A and IPOs), improving research workflow efficiency.",
    ],
  },
  {
    role: "Research Consultant",
    company: "Netscribes Data & Insights Private Limited",
    startDate: "Dec 2023",
    endDate: "Mar 2024",
    description:
      "Banking, Financial Services, and Insurance (BFSI) research team.",
    highlights: [
      "Reviewed and interpreted 100+ annual reports, evaluating financial and operational metrics to support investment shortlisting across 400+ companies.",
      "Analyzed financial statements, ESG disclosures, and CSR reports, applying ethical reasoning to identify opportunities.",
      "Oversaw quality control of research outputs, ensuring accuracy and consistency across multiple company evaluations.",
      "Recognized for analytical performance, leading to transition from contract to full-time Associate role.",
    ],
  },
]
