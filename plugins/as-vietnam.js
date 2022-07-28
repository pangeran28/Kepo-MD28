let handler = async(m,{text, conn}) => {
let supa = 'https://api.zacros.my.id/asupan/vietnam'
conn.sendFile(m.chat, supa, null, 'Vietnam Sayang💦', m)
}
handler.help = ['negaratetangga2']
handler.tags = ['asupan']
handler.command = /^(negaratetangga2)$/i
handler.premium = true
handler.limit = true
module.exports = handler
