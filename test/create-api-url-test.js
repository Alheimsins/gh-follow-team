const test = require('ava')
const createApiUrl = require('../lib/create-api-url')

test('it returns api url from team url', t => {
  const teamUrl = 'https://github.com/orgs/Alheimsins/teams/core/members'
  const expectedUrl = 'https://api.github.com/orgs/Alheimsins/teams/core/members'
  const createdUrl = createApiUrl(teamUrl)
  t.is(createdUrl, expectedUrl, 'url is ok')
})

test('it returns api url from org url', t => {
  const teamUrl = 'https://github.com/Alheimsins'
  const expectedUrl = 'https://api.github.com/orgs/Alheimsins/members'
  const createdUrl = createApiUrl(teamUrl)
  t.is(createdUrl, expectedUrl, 'url is ok')
})

test('it returns api url from api url', t => {
  const teamUrl = 'https://api.github.com/orgs/Alheimsins/teams/core/members'
  const expectedUrl = 'https://api.github.com/orgs/Alheimsins/teams/core/members'
  const createdUrl = createApiUrl(teamUrl)
  t.is(createdUrl, expectedUrl, 'url is ok')
})

test('it returns api url from team url without members', t => {
  const teamUrl = 'https://github.com/orgs/Alheimsins/teams/core'
  const expectedUrl = 'https://api.github.com/orgs/Alheimsins/teams/core/members'
  const createdUrl = createApiUrl(teamUrl)
  t.is(createdUrl, expectedUrl, 'url is ok with members')
})
