export interface Project {
  id: number
  title: string
  description: string
  screenshots?: string[]
  technologies?: string[]
  link?: string
}

export interface Article {
  id: number
  title: string
  description: string
  slug?: string
  publishedAt?: string
}

export interface Contact {
  id: number
  title: string
  url: string
  screenshot?: string
}

export interface JourneyItem {
  title: string
  description: string
}

