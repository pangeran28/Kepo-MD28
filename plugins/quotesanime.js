/*let axios = require("axios");
let handler = async(m, { conn, text }) => {

	axios.get(`https://videfikri.com/api/anime/randomquoteanime`).then ((res) => {
	 	let hasil = `${res.data.result.quotes}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['quoteanime']
handler.tags = ['quotes']
handler.command = /^(quoteanime)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler*/


let fetch = require('node-fetch')
let fs = require('fs')
let handler = async(m, { conn, usedPrefix, text, command }) => {
  let json = await require("../lib/scrape").quotesAnime('')
  conn.sendButtonImg(m.chat, json.gambar, `${json.quotes} - By _${json.karakter}_ \nEpisode : ${json.episode}\nFrom Anime : ${json.anime}\nLink : ${json.link}`, `${json.up_at}`, `Lainnya`, `${usedPrefix + command}`, ftoko)
}
handler.help = ['quotesanim']
handler.tags = ['anime']
handler.command = /^(quotesanim)$/i
handler.register = true
handler.limit = true

module.exports = handler
