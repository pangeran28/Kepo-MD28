let handler = async (m, { conn, command }) => {
let supa = 'https://api.zacros.my.id/asupan/vietnam'
conn.sendButtonImg(m.chat, supa, `Nihh @${m.sender.split('@')[0]} Cewe Vietnamnya Om!`, wm, `Next Sayang`, `.${command}`, m)
}
handler.help = ['vietnam']
handler.tags = ['asupan']
handler.command = /^(vietnam)$/i
handler.premium = true
handler.limit = true
handler.register = true
module.exports = handler
