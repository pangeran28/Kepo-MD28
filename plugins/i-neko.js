let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  let res = await fetch('https://api.waifu.pics/sfw/neko')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, wm, '_*Nih Neko nya Sayang*_\n\n_*Follow IG OwnerKu Tante:*_\nhttps://instagram.com/kokopangeran_', m)
}
handler.help = ['neko']
handler.tags = ['internet']
handler.command = /^neko$/i
handler.limit = true

module.exports = handler
