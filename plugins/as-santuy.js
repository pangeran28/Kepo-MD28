let handler = async(m,{text, conn}) => {
let supa = 'https://api.zacros.my.id/asupan/santuy'
conn.sendFile(m.chat, supa, null, 'Nih Om💦\n\n_*Follow IG OwnerKu:*_\nhttps://instagram.com/kokopangeran_', m)
}
handler.help = ['santuy']
handler.tags = ['asupan']
handler.command = /^(santuy)$/i
handler.premium = true
handler.limit = true
module.exports = handler
