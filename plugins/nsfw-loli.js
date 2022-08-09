let fetch = require('node-fetch')
let handler  = async (m, { conn, usedPrefix, command }) => {
if (!DATABASE._data.chats[m.chat].nsfw && m.isGroup) throw '*[ ⚠️ ] Los comandos +18 estan desactivados en este grupo, si es administrador de este grupo y desea activarlos escriba #enable nsfw*'
heum = await fetch(`https://server-api-rey.herokuapp.com/api/wallpaper/nsfwloli?apikey=apirey`)
json = await heum.buffer()
conn.sendFile(m.chat, json, '*Sangne Lu Ya*', wm, m, false)
}
handler.help = ['nsfwloli']
handler.tags = ['nsfw']
handler.command = /^(nsfwloli)$/i
handler.premium = true
handler.limit = true
module.exports = handler 
