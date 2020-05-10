const getTeamMembers = require('./get-team-members')

module.exports = async options => {
  const { token, teamUrl } = options
  const members = await getTeamMembers(options)
  process.exit(0)
}
