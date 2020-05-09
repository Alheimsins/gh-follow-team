(async () => {
  const open = require('open')
  const setup = require('./lib/setup')
  const { clientID, clientSecret, teamUrl } = await setup()
  console.log(clientID, clientSecret, teamUrl)

  require('http').createServer((request, response) => {
    if (request.url.match(/callback/)) {
      const url = new URL(`http://${request.headers.host}${request.url}`)
      const code = url.searchParams.get('code')
      console.log(code)
      response.end('You may close this window now.')
      process.exit(0)
    }
  }).listen(3000)

  open(`https://github.com/login/oauth/authorize?client_id=${clientID}&scope=user:follow,read:org`)
})()
