let handler = async (m, { conn, command }) => {
let supa = 'https://api.zacros.my.id/asupan/Indonesia'
conn.sendFile(m.chat, supa, null, 'indonesia', m)
}
handler.help = ['negarasendiri']
handler.tags = ['asupan']
handler.command = /^(negarasendiri)$/i
handler.premium = true
handler.limit = true
module.exports = handler
