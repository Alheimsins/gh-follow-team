const axios = require('axios')
const accessTokenUrl = 'https://github.com/login/oauth/access_token'

module.exports = async (request, response) => {
  const payload = {
    client_id: process.env.GITHUB_CLIENT_ID,
    client_secret: process.env.GITHUB_CLIENT_SECRET,
    code: request.query.code
  }
  const options = { headers: { accept: 'application/json' } }
  try {
    const { data } = await axios.post(accessTokenUrl, payload, options)
    const { access_token: accessToken } = data
    response.writeHead(301,
      { Location: `http://localhost:9000/callback?token=${accessToken}` }
    )
    response.end()
  } catch (error) {
    console.error('noke gale')
    console.error(error)
  }
}
