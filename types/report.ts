export interface Report {
  id: string,
  date: Date,
  link: string,
  title: string,
  content: string,
  description: string,
  image: {
    src: string,
    alt: string
  },
  badge: {
    label: string
  },
  authors: {
    name: string,
    avatar: {
      src: string,
      target: string,
      to: string
    }
  }[]
}
