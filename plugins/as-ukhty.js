let handler = async (m, { conn, command }) => {
let supa = 'https://api.zacros.my.id/asupan/ukhty'
conn.sendButtonImg(m.chat, supa, `Nihh @${m.sender.split('@')[0]} Cewe Hijabers Kedua Om!`, wm, `Next Sayang`, `.${command}`, m)
}
handler.help = ['ukhty']
handler.tags = ['asupan']
handler.command = /^(ukhty)$/i
handler.premium = true
handler.limit = true
handler.register = true
module.exports = handler
