let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Text\nContoh : .grass PANGERAN'
  m.reply(stiker_wait)
  let res = `https://botcahx-rest-api.herokuapp.com/api/photooxy/under-grass?text=${response[0]}`
  conn.sendFile(m.chat, res, 'botcahx.jpg', `© PANGERAN`, m, false)
}
handler.help = ['grass'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(grass)$/i
handler.limit = true
module.exports = handler
