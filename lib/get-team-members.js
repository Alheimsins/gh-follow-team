const axios = require('axios')
const createApiUrl = require('./create-api-url')

module.exports = async options => {
  const { token, teamUrl } = options
  const baseUrl = createApiUrl(teamUrl)
  console.log(baseUrl)
  const colleagues = []
  let page = 0
  let gotColleagues = true

  axios.defaults.headers.common.Authorization = `Bearer ${token}`

  console.log('start looking for colleagues')

  while (gotColleagues === true) {
    page++
    const url = `${baseUrl}?page=${page}&per_page=100`
    try {
      const { data: retrievedColleagues } = await axios.get(url)
      console.log(`retrieved ${retrievedColleagues.length}`)
      colleagues.push(...retrievedColleagues)
      if (retrievedColleagues.length === 0) {
        gotColleagues = false
      }
    } catch (error) {
      console.error(error.message)
      console.log('are you sure the app have the right permissions?')
      process.exit(1)
    }
  }

  console.log(`total colleagues: ${colleagues.length}`)

  return colleagues
}
