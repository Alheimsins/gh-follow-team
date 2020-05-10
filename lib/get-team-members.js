const axios = require('axios')
const createApiUrl = require('./create-api-url')

module.exports = async options => {
  const { token, teamUrl } = options
  const baseUrl = createApiUrl(teamUrl)
  const colleagues = []
  let page = 0
  let gotColleagues = true

  axios.defaults.headers.common.Authorization = `Bearer ${token}`

  console.log('start looking for colleagues')
  
  while (gotColleagues === true) {
    page++
    const url = `${baseUrl}?page=${page}&per_page=100`
    const { data: retrievedColleagues } = await axios.get(url)
    console.log(`retrieved ${retrievedColleagues.length}`)
    colleagues.push(...retrievedColleagues)
    if (retrievedColleagues.length === 0) {
      gotColleagues = false
    }
  }

  console.log(`total colleagues: ${colleagues.length}`)

  return colleagues
}