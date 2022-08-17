let handler = async (m, { conn, command }) => {
let supa = 'https://api.zacros.my.id/asupan/loli'
conn.sendButtonImg(m.chat, supa, `Nihh @${m.sender.split('@')[0]} Cewe Lolinya Om!`, wm, `Next Sayang`, `.${command}`, m)
}
handler.help = ['asupanloli']
handler.tags = ['asupan']
handler.command = /^(asupanloli)$/i
handler.premium = true
handler.limit = true
handler.register = true
module.exports = handler
