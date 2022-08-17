let fetch = require('node-fetch')
let fs = require('fs')
let handler = async(m, { conn, usedPrefix, text, command }) => {
  if (!text) throw `Masukan Judul Manga Nya!`
  let json = await require("../lib/scrape").mangatoons(text)
  let bilek = pickRandom(json)
  
  conn.sendButtonImg(m.chat, bilek.thumbnail, `Title : ${bilek.judul}\nGenre : ${bilek.genre}`, `${bilek.link}`, `Lainnya`, `${usedPrefix + command} ${text}`, fkontak)
}

handler.help = ['mangatoons <teks judul>']
handler.tags = ['anime', 'internet']
handler.command = /^(mangatoons)$/i
handler.register = true
handler.premium = true
handler.limit = true

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
