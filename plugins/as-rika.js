let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  let res = await fetch('https://ziy.herokuapp.com/api/asupan/rikagusriani?apikey=xZiyy')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.result.url) throw 'Error!'
  conn.sendFile(m.chat, json.result.url, '', 'Follow ig sya yh kak @kokopangeran_', m)
}
handler.help = ['rika']
handler.tags = ['asupan']
handler.command = /^(rika)$/i
handler.limit = true
handler.premium = true
//MADE IN ERPAN 1140 BERKOLABORASI DENGAN BTS
module.exports = handler
