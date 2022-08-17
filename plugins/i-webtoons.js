let fetch = require('node-fetch')
let fs = require('fs')
let handler = async(m, { conn, usedPrefix, text, command }) => {
  if (!text) throw `Masukan Judul web Nya!`
  let json = await require("../lib/scrape").webtoons(text)
  let bilek = pickRandom(json)
  
  conn.sendButtonImg(m.chat, bilek.thumbnail, `Title : ${bilek.judul}\nJumlah Disukai : ${bilek.like}\nGenre : ${bilek.genre}\nLink Url : ${bilek.url}`, `Create By ${bilek.creator}`, `Lainnya`, `${usedPrefix + command} ${text}`, fkontak)
}

handler.help = ['webtoons <teks judul>']
handler.tags = ['anime', 'internet']
handler.command = /^(webtoons)$/i
handler.register = true
handler.premium = true
handler.limit = true

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
