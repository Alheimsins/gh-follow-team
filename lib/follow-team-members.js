const axios = require('axios')
const sleep = require('then-sleep')
const getTeamMembers = require('./get-team-members')

module.exports = async options => {
  const { token, teamUrl } = options
  const colleagues = await getTeamMembers({ token, teamUrl })

  axios.defaults.headers.common.Authorization = `Bearer ${token}`

  while (colleagues.length > 0) {
    const colleague = colleagues.pop()
    const { login: username } = colleague
    console.log(`following ${username}`)
    const followUrl = `https://api.github.com/user/following/${username}`
    await axios.put(followUrl)
    console.log(`only ${colleagues.length} to go`)
    await sleep(500)
  }
  console.log('Everyone is added')

  process.exit(0)
}
