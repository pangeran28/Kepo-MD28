/*let handler = async (m, { conn, command }) => {
let supa = 'https://api.zacros.my.id/asupan/cecan'
conn.sendButtonImg(m.chat, supa, `Nihh @${m.sender.split('@')[0]} Cewe Cantiknya Om!`, wm, `Next Sayang`, `.${command}`, m)
}*/
let scrap = require("../lib/scraper_pinterest3")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("ulzhang girl","cewek keren","cewek cantik","cecan","cewek korea","cewek hijab","cewek thailand","cewek malaysia","cewek jepang","blackpink","cewek vietnam","cewek gemoy").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"*Nih Om💦*\n\n_*FOLLOW IG OWNERKU OM:*_\nhttps://instagram.com/kokopangeran_",m))
   }

handler.help = ['cecan']
handler.tags = ['asupan']
handler.command = /^(cecan)$/i
handler.premium = true
handler.register = true
handler.limit = true
module.exports = handler
