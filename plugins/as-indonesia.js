let handler = async (m, { conn, command }) => {
let supa = 'https://api.zacros.my.id/asupan/Indonesia'
conn.sendButtonImg(m.chat, supa, `Nihh @${m.sender.split('@')[0]} Cewe Indonya Om!`, wm, `Next Sayang`, `.${command}`, m)
}
handler.help = ['indo']
handler.tags = ['asupan']
handler.command = /^(indo)$/i
handler.premium = true
handler.limit = true
handler.register = true
module.exports = handler
