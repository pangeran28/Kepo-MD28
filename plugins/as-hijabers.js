let handler = async (m, { conn, command }) => {
let supa = 'https://api.zacros.my.id/asupan/hijaber'
conn.sendButtonImg(m.chat, supa, `Nihh @${m.sender.split('@')[0]} Cewe Hijabers Om!`, wm, `Next Sayang`, `.${command}`, m)
}
handler.help = ['hijab']
handler.tags = ['asupan']
handler.command = /^(hijab)$/i
handler.premium = true
handler.limit = true
handler.register = true
module.exports = handler
