#! /usr/bin/env node

const boxen = require('boxen')
const { bold, magenta, cyan } = require('chalk').default
const moment = require('moment')

const getGreetingTime = () => {
  let g = null // return g
  const m = moment()
  const splitAfternoon = 12 // 24hr time to split the afternoon
  const splitEvening = 17 // 24hr time to split the evening
  const currentHour = parseFloat(m.format('HH'))

  if (currentHour >= splitAfternoon && currentHour <= splitEvening) {
    g = 'afternoon'
  } else if (currentHour >= splitEvening) {
    g = 'evening'
  } else {
    g = 'morning'
  }
  return `${m.format('dddd')} ${g}`
}

const info = [
  bold('Oz Haven'),
  'Senior Software Engineer at Saleae Inc.',
  '',
  `${bold('GitHub:   ')}${cyan('https://github.com/therebelrobot')}`,
  `${bold('Twitter:  ')}${cyan('https://twitter.com/therebelrobot')}`,
  `${bold('LinkedIn: ')}${cyan('https://www.linkedin.com/in/therebelrobot/')}`,
  '------------------------',
  '',
  bold('The Forge Project'),
  `Easy-listening synth-trap for your ${getGreetingTime()}.`,
  cyan('https://theforge.pro'),
  '',
  `${bold('Spotify:   ')}${cyan(
    'https://open.spotify.com/artist/4a56tUWRygifILXCoXAcoP?si=TeRAgIgPSdmEmf8Q04QjpQ'
  )}`,
  `${bold('Apple Music:  ')}${cyan(
    'https://itunes.apple.com/us/artist/the-forge-project/1305199849'
  )}`,
  `${bold('Bandcamp: ')}${cyan(
    'https://theforgeproject.bandcamp.com/releases'
  )}`,
  ''
]

const style = {
  margin: 1,
  padding: 1
}

process.stdout.write(`${magenta(boxen(info.join('\n'), style))}\n\n`)
