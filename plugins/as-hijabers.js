let handler = async(m,{text, conn}) => {
let supa = 'https://api.zacros.my.id/asupan/hijaber'
conn.sendFile(m.chat, supa, null, 'hijaber', m)
}
handler.help = ['tudung']
handler.tags = ['asupan']
handler.command = /^(tudung)$/i
handler.premium = true
handler.limit = true
module.exports = handler
