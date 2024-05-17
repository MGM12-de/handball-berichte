

import { serverQueryContent } from '#content/server'

export default defineEventHandler(async (event) => {
  let reports: Report[] = []
  const organization = getRouterParam(event, 'org')

  const settings = await serverQueryContent(event).find()
  
  const orgSettings = settings.find((setting) => setting._path === `/settings/${organization}`)

  if (!orgSettings){
    throw createError({
      statusCode: 400,
      statusMessage: 'Organisation doesn\'t have settings',
    })
}

let promises = orgSettings.body.map(async (setting) => {
  var clubReports: Report[] = []
  switch (setting.website.type) {
    case 'wordpress':
      clubReports = await $fetch('/api/cms/wordpress', {
        query: {
          baseUrl: setting.website.url,
        },
      })
      break;
  
    default:
      break;
  } 
  if(clubReports){
    clubReports.forEach(report => {
      report.authors = [{
        name: setting.name,
        avatar: {
          target: '_blank',
          src: setting.logo,
          to: setting.website.url
        }
      }]
      report.id += `-${setting.id}`
    });
    return clubReports;
  }
  return [];
});

// Wait for all promises to resolve
let results = await Promise.all(promises);

// Flatten the array of arrays into a single array
reports = [].concat(...results);

reports.sort((a, b) => new Date(b.date) - new Date(a.date))
  return reports
})
