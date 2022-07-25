let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/70f95bcad271d303bf982.png', m, { packname: "ᵈʳᴋᴏᴋᴏ⁻ᴹᴰ×፝֟͜×", author: "@ᵈʳᴋᴏᴋᴏ ᴘᴀ፝֟፝֟ɴɢᴇʀᴀɴ×፝֟͜×" })
}

handler.customPrefix = /^(woi|Cok|ngab|tod|bang|hai|hi|hii)$/i
handler.command = new RegExp

module.exports = handler
