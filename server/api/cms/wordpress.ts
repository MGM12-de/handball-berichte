export default defineEventHandler(async (event) => {
  const query = getQuery(event)

  const reports = $fetch(`https://${query.baseUrl}/wp-json/wp/v2/posts`)
  
  return reports
})
