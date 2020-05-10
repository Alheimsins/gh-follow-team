const API_URL = 'https://api.github.com'

module.exports = teamUrl => {
  const url = new URL(teamUrl)
  return `${API_URL}${url.pathname}`
}
