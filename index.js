(async () => {
  const setup = require('./lib/setup')
  const { clientId, clientSecret, teamUrl} = await setup()
  console.log(clientId, clientSecret, teamUrl)
})()
