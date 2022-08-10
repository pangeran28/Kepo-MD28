let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Text\nContoh : .pictlove BOTCAHX'
  m.reply(stiker_wait)
  let res = `https://botcahx-rest-api.herokuapp.com/api/photooxy/picture-of-love?text=${response[0]}`
  conn.sendFile(m.chat, res, 'botcahx.jpg', `© PANGERAN`, m, false)
}
handler.help = ['pictlove'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(pictlove)$/i
handler.limit
module.exports = handler
