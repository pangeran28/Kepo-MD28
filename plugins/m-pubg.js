let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Text\nContoh : .pubg PANGERAN'
  m.reply('_Proses..._')
  let res = `https://botcahx-rest-api.herokuapp.com/api/photooxy/pubg?text=Pubg&text2=${response[0]}`
  conn.sendFile(m.chat, res, 'botcahx.jpg', `© PANGERAN`, m, false)
}
handler.help = ['pubg'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(pubg)$/i
handler.limit = true
module.exports = handler
