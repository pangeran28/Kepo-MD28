let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Teks'
  m.reply('*Wait ngab*\n_Lagi dientod..._')
  let res = `http://hadi-api.herokuapp.com/api/textpro/3d-underwater-text?teks=${response[0]}&teks2=Elyas`
  conn.sendFile(m.chat, res, 'underwatee.jpg', `_Sudah Jadi Sayang💦_\n\n_*Follow IG OwnerKu Tante:*_\nhttps://instagram.com/kokopangeran_`, m, false)
}
handler.help = ['underwater'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(underwater)$/i

module.exports = handler
