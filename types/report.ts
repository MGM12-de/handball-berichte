export interface Report {
  id: number,
  date: Date,
  link: string,
  title: string,
  content: string,
  description: string,
  image: {
    src: string,
    alt: string
  }
}
