let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
     m.reply('Tunggu Samyang...')
  let res = await (await fetch('https://raw.githubusercontent.com/Luigmntng/RESTAPI/master/data/cosplaysagiri.json')).json()
  let cosser = res[Math.floor(Math.random() * res.length)]
  await conn.sendButtonImg(m.chat, cosser, 'istri gw cosplay 😳', wm, 'Next', `.cosplaysagiri`, m, false)
}
handler.help = ['cosplaysagiri']
handler.tags = ['random']
handler.command = /^(cosplaysagiri)$/i
handler.limit = true
handler.premium = true
handler.register = true

module.exports = handler
