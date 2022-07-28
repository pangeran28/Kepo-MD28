let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Parameter'
  m.reply('*Wait Ngab*\n_Lagi dientod..._')
  let res = `https://caliphapi.com/api/lolimaker?text=${response[0]}&text2=elyas&apikey=ThiPAkps`
  conn.sendFile(m.chat, res, 'lolilogo.jpg', `_*Sudah Jadi Sayang💦*_`, m, false)
}
handler.help = ['logololi'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(logololi)$/i
handler.limit = true
module.exports = handler
