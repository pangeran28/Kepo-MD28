let handler = async(m,{text, conn}) => {
let supa = 'https://api.zacros.my.id/asupan/japan'
conn.sendFile(m.chat, supa, null, 'Jepang Sayang🇯🇵', m)
}
handler.help = ['negaratetangga5']
handler.tags = ['asupan']
handler.command = /^(negaratetangga5)$/i
handler.premium = true
handler.limit = true
module.exports = handler
