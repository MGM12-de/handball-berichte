export default defineEventHandler(async (event) => {
  var reports: Report[] = []
  const query = getQuery(event)

  const wpReports = await $fetch(`https://${query.baseUrl}/wp-json/wp/v2/posts?_embed`) as Array<any>
  
  reports = wpReports.map((report: any) => {
    let convertedReport: Report = {
      id: report.id,
      date: new Date(report.date),
      link: report.link,
      title: report.title.rendered,
      content: report.content.rendered,
      description: report.excerpt.rendered.replace(/<[^>]*>/g, ""),
      image: {
        src: '',
        alt: ''
      },
      badge: {
        label: ''
      }
    }
    convertedReport.description = convertedReport.description.replace('[&hellip;]', '...')
    if (report._embedded['wp:featuredmedia'])
    {
      convertedReport.image = {
        src: report._embedded['wp:featuredmedia'][0].source_url,
        alt: report._embedded['wp:featuredmedia'][0].alt_text
      }
    }

    if (report._embedded['wp:term']){
      convertedReport.badge.label = report._embedded['wp:term'][0].map(term => term.name).join(", ")
    }
    return convertedReport
  })
  return reports
})
