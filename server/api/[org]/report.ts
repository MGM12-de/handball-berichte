import { serverQueryContent } from '#content/server'

export default defineEventHandler(async (event) => {
  let report: Report
  const organization = getRouterParam(event, 'org')
  const query = getQuery(event)

  const settings = await serverQueryContent(event).find()
  
  const orgSettings = settings.find((setting) => setting._path === `/settings/${organization}`)

  if (!orgSettings){
    throw createError({
      statusCode: 400,
      statusMessage: 'Organisation doesn\'t have settings',
    })
}
const setting = orgSettings.body.find((setting) => setting.id === query.clubId)
const wpReport = await $fetch(`https://${setting.website.url}/wp-json/wp/v2/posts/${query.postId}?_embed`) as any

report = {
  id: wpReport.id,
  date: new Date(wpReport.date),
  link: wpReport.link,
  title: wpReport.title.rendered,
  content: wpReport.content.rendered,
  description: wpReport.excerpt.rendered.replace(/<[^>]*>/g, ""),
  image: {
    src: '',
    alt: ''
  },
  badge: {
    label: ''
  }
}

report.description = report.description.replace('[&hellip;]', '...')
    if (wpReport._embedded['wp:featuredmedia'])
    {
      report.image = {
        src: wpReport._embedded['wp:featuredmedia'][0].source_url,
        alt: wpReport._embedded['wp:featuredmedia'][0].alt_text
      }
    }

    if (wpReport._embedded['wp:term']){
      report.badge.label = wpReport._embedded['wp:term'][0].map(term => term.name).join(", ")
    }

      report.authors = [{
        name: setting.name,
        avatar: {
          target: '_blank',
          src: setting.logo,
          to: setting.website.url
        }
      }]
      report.id += `-${setting.id}`

return report
})
