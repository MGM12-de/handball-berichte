export default defineEventHandler(async (event) => {
  var reports: Report[] = []
  const query = getQuery(event)

  const wpReports = await $fetch(`https://${query.baseUrl}/wp-json/wp/v2/posts?_embed`) as Array<any>
  
  reports = wpReports.map((report: any) => {
    return {
      id: report.id,
      date: new Date(report.date),
      link: report.link,
      title: report.title.rendered,
      content: report.content.rendered,
      description: report.excerpt.rendered,
      image: {
        src: report._embedded['wp:featuredmedia'][0]?.source_url,
        alt: report._embedded['wp:featuredmedia'][0]?.alt_text
      }
    }
  })
  return reports
})
