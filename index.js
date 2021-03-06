#!/usr/bin/env node
(async () => {
  const open = require('open')
  const { nanoid } = require('nanoid')
  const state = nanoid()
  const followTeamMembers = require('./lib/follow-team-members')
  const teamUrl = process.argv.slice(2)[0]

  require('http').createServer((request, response) => {
    if (request.url.match(/callback/)) {
      const url = new URL(`http://${request.headers.host}${request.url}`)
      const token = url.searchParams.get('token')
      response.end('You may close this window now.')
      if (token) {
        followTeamMembers({ token, teamUrl })
      } else {
        throw Error('missing token')
      }
    }
  }).listen(9000)

  open(`https://gh-follow-team.allthethings.win/login?state=${state}`)
})()
