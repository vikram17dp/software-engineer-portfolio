export interface Credit {
  role: string
  name: string
}

export interface Project {
  id: number
  title: string
  category: string
  year: string
  role: string
  duration: string

  purpose: string
  description: string[]
  fullDescription?: string[]
  informationParagraphs?: string[]
  modules?: string[]

  images: string[]
  tech?: string[]
  label?: String
  contribution?: string
  credits?: Credit[]

  related?: number[]
  github?: string
  live?: string
}