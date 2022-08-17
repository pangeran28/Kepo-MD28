let fetch = require('node-fetch')
let fs = require('fs')
let handler = async(m, { conn, usedPrefix, text, command }) => {
  let json = await require("../lib/scrape").porno('')
  conn.sendButtonVid(m.chat, json.video, `Title : ${json.title}\nDesc : ${json.desc}`, `${json.upload}`, `Next`, `${ usedPrefix + command }`, fkontak)
}
handler.help = ['tiktokporn']
handler.tags = ['bokep']
handler.command = /^(tiktokporn)$/i
handler.premium = true
handler.register = true
handler.limit = true

module.exports = handler
