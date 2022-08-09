let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("loli","loli kawai","loli sagiri","anime loli","loli cat").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"_*Nih Lolinya Sayang*_\n\n_*Follow IG OwnerKu Tante:*_\nhttps://instagram.com/kokopangeran_",m))
   }
    
handler.help = ['loli']
handler.tags = ['internet']
handler.command = /^(loli)$/i
handler.limit = true
handler.premium = true
module.exports = handler
