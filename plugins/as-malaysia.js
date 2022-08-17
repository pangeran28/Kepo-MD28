let handler = async (m, { conn, command }) => {
let supa = 'https://api.zacros.my.id/asupan/malaysia'
conn.sendButtonImg(m.chat, supa, `Nihh @${m.sender.split('@')[0]} Cewe Malaynya Om!`, wm, `Next Sayang`, `.${command}`, m)
}
handler.help = ['malay']
handler.tags = ['asupan']
handler.command = /^(malay)$/i
handler.premium = true
handler.limit = true
handler.register = true
module.exports = handler
