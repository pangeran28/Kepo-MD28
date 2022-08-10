let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Text\nContoh : .coffee PANGERAN'
  m.reply(stiker_wait)
  let res = `https://botcahx-rest-api.herokuapp.com/api/photooxy/coffee-cup?text=${response[0]}`
  conn.sendFile(m.chat, res, 'botcahx.jpg', `© PANGERAN`, m, false)
}
handler.help = ['coffee'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(coffee)$/i
handler.limit = true
module.exports = handler
