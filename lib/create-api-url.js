const API_URL = 'https://api.github.com'

module.exports = teamUrl => {
  const url = new URL(teamUrl)
  const orgs = url.pathname.startsWith('/orgs/') ? '' : '/orgs'
  const path = url.pathname.endsWith('members') ? url.pathname : `${url.pathname}/members`
  return `${API_URL}${orgs}${path}`
}
