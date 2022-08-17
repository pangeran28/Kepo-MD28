let handler = async (m, { conn, command }) => {
let supa = 'https://api.zacros.my.id/asupan/cecan'
conn.sendButtonImg(m.chat, supa, `Nihh @${m.sender.split('@')[0]} Cewe Cantiknya Om!`, wm, `Next Sayang`, `.${command}`, m)
}
handler.help = ['cecan']
handler.tags = ['asupan']
handler.command = /^(cecan)$/i
handler.premium = true
handler.register = true
handler.limit = true
module.exports = handler
