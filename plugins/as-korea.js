let handler = async(m,{text, conn}) => {
let supa = 'https://api.zacros.my.id/asupan/korea'
conn.sendFile(m.chat, supa, null, 'Korea Sayang🇰🇷', m)
}
handler.help = ['negaratetangga4']
handler.tags = ['asupan']
handler.command = /^(negaratetangga4)$/i
handler.premium = true
handler.limit = true
module.exports = handler
