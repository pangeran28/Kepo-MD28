let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("ulzhang boy","cowok keren","cowok ganteng","cogan","cowok korea").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"*Nih Sayangku💦*\n\n_*FOLLOW IG OWNERKU SAYANG:*_\nhttps://instagram.com/kokopangeran_",m))
   }
    
handler.help = ['cogan']
handler.tags = ['asupan']
handler.command = /^(cogan)$/i
handler.limit = true
handler.premium = true

module.exports = handler
