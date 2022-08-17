let handler = async (m, { conn, command }) => {
let supa = 'https://api.zacros.my.id/asupan/korea'
conn.sendButtonImg(m.chat, supa, `Nihh @${m.sender.split('@')[0]} Cewe Koreanya Om!`, wm, `Next Sayang`, `.${command}`, m)
}
handler.help = ['korea']
handler.tags = ['asupan']
handler.command = /^(korea)$/i
handler.premium = true
handler.register = true
handler.limit = true
module.exports = handler
