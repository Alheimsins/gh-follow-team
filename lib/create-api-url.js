const API_URL = 'https://api.github.com'

module.exports = teamUrl => {
  const url = new URL(teamUrl)
  const path = url.pathname.endsWith('members') ? url.pathname : `${url.pathname}/members`
  return `${API_URL}${path}`
}
