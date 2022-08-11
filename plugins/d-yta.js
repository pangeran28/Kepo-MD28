let axios = require('axios')
const fetch = require('node-fetch')
let limit = 1024354
const { servers, yta } = require('../lib/y2mate')
let handler = async (m, { conn, args, isPrems, isOwner }) => {
  if (!args || !args[0]) throw 'Uhm... urlnya mana?'
  let chat = global.db.data.chats[m.chat]
  let server = (args[1] || servers[0]).toLowerCase()
  let { dl_link, thumb, title, filesize, filesizeF} = await yta(args[0], servers.includes(server) ? server : servers[0])
  let isLimit = (isPrems || isOwner ? 99 : limit) * 1024 < filesize 
  if (!isLimit) conn.sendFile(m.chat, dl_link, title + '.mp3', `
┏┉━━━━━━━━━━━❏
┆ *YOUTUBE MP3*
├┈┈┈┈┈┈┈┈┈┈┈
┆• *Judul:* ${title}
│• *Type:* MP3
┆• *📥 Ukuran File:* ${filesizeF}
└❏
`.trim(), m, null, {
  asDocument: chat.useDocument
})
}
handler.help = ['ytmp3 <query>']
handler.tags = ['downloader']
handler.command = /^yt(a(udio)?|mp3|musik|lagu)$/i
handler.limit = true
handler.premium =true
module.exports = handler
