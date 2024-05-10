

import { serverQueryContent } from '#content/server'

export default defineEventHandler(async (event) => {
  let reports = []
  const organization = getRouterParam(event, 'org')

  const settings = await serverQueryContent(event).find()
  
  const orgSettings = settings.find((setting) => setting._path === `/settings/${organization}`)

  if (!orgSettings){
    throw createError({
      statusCode: 400,
      statusMessage: 'Organisation doesn\'t have settings',
    })
}

for (const setting of orgSettings.body ) {
  var clubReports = null
  switch (setting.website.type) {

    case 'wordpress':
      clubReports = await $fetch('/api/cms/wordpress', {
        query: {
          baseUrl: setting.website.url,
        },
        }
      )
      break;
  
    default:
      break;
  } 
  if(clubReports){
    reports = [...reports, ...clubReports]
  }
}

reports.sort((a, b) => new Date(b.date) - new Date(a.date))
  return reports
})
