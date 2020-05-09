(async () => {
  const open = require('open')
  const setup = require('./lib/setup')
  const { teamUrl } = await setup()

  require('http').createServer((request, response) => {
    if (request.url.match(/callback/)) {
      const url = new URL(`http://${request.headers.host}${request.url}`)
      const token = url.searchParams.get('token')
      response.end('You may close this window now.')
    }
  }).listen(9000)

  open(`https://gh-follow-team.allthethings.win/login`)
})()
