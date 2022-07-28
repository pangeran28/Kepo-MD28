let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan text1|text2\n\ncontoh: .logoneko elyas|ganzz'
  m.reply('*Wait ngab*\n_Lagi dientod..._')
  let res = `https://caliphapi.com/api/girlneko?text=${response[0]}&text2=${response[1]}&apikey=ThiPAkps`
  conn.sendFile(m.chat, res, 'nekologo.jpg', `_Sudah Jadi Sayang💦_\n\n_*Follow IG Ownerku Tante:*_\nhttps://instagram.com/kokopangeran_`, m, false)
}
handler.help = ['logoneko'].map(v => v + ' <text|text>')
handler.tags = ['maker']
handler.command = /^(logoneko)$/i
handler.limit = true
module.exports = handler
