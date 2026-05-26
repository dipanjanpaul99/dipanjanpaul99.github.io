export interface Education {
  degree: string
  institution: string
  location?: string
  startDate: string
  endDate: string
  description?: string
}

export const education: Education[] = [
  {
    degree: "MBA",
    institution: "Vinod Gupta School of Management, IIT Kharagpur",
    startDate: "2025",
    endDate: "Present",
    description: "Expected graduation: 2027.",
  },
  {
    degree: "M.A. in Economics",
    institution: "St. Xavier's University, Kolkata",
    startDate: "2021",
    endDate: "2023",
    description: "Gold Medallist — Rank 1. CGPA: 9.19/10.",
  },
  {
    degree: "B.A. in Economics",
    institution: "St. Xavier's University, Kolkata",
    startDate: "2018",
    endDate: "2021",
    description: "CGPA: 8.91/10.",
  },
  {
    degree: "Class XII (ISC)",
    institution: "W.W.A. CES, Kolkata",
    startDate: "2018",
    endDate: "2018",
  },
  {
    degree: "Class X (ICSE)",
    institution: "Rose Bud School, Howrah",
    startDate: "2016",
    endDate: "2016",
  },
]
