let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('*Lagi dientod...*')
  let res = `https://api.zeks.xyz/api/epep?text=${response}&apikey=apivinz`
  conn.sendFile(m.chat, res, 'nama.jpg', `*Nih Sayang💦*`, m, false)
}
handler.help = ['fflogo'].map(v => v + ' <teks>')
handler.tags = ['sticker', 'internet', 'maker']
handler.command = /^(fflogo)$/i
handler.limit = true
handler.register = false

module.exports = handler
