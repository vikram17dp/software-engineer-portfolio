// src/types/experience-interface.ts

export interface Experience {
  id: number

  company: string
  companyUrl?: string
  location: string
  mode: 'Remote' | 'Onsite' | 'Hybrid'
  images?: string[]

  role: string
  type: 'Internship' | 'Full-time' | 'Contract'
  duration: string
  startDate?: string
  endDate?: string | 'Present'

  description: string[]
  detailedWork?: string[]

  techStack: string[]

  highlights?: string[]
  projectRelatedIds?: number[]

  certificate?: string
  github?: string
  companyLink?: string
}
