module.exports = (reqest, response) => {
  response.writeHead(301,
    { Location: `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&scope=user:follow,read:org` }
  )
  response.end()
}