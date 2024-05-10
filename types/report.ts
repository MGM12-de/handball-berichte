export interface Report {
  id: number,
  date: Date,
  link: string,
  title: {
    rendered: string
  },
  content: {
    rendered: string
  },
  excerpt: {
    rendered: string
  },
}
