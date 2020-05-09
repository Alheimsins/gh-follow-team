(async () => {
  const open = require('open')
  const setup = require('./lib/setup')
  const { teamUrl } = await setup()
  console.log(teamUrl)

  require('http').createServer((request, response) => {
    if (request.url.match(/callback/)) {
      const url = new URL(`http://${request.headers.host}${request.url}`)
      const token = url.searchParams.get('token')
      console.log(token)
      response.end('You may close this window now.')
      process.exit(0)
    }
  }).listen(9000)

  open(`http://localhost:3000/login`)
})()
