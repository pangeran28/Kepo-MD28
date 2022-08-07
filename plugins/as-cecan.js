let handler = async(m,{text, conn}) => {
let supa = 'https://api.zacros.my.id/asupan/cecan'
conn.sendFile(m.chat, supa, null, '*Cewe Cantik Nih Om💦*\n\n_*FOLLOW IG OWNERKU OM:*_\nhttps://instagram.com/kokopangeran_', m)
}
handler.help = ['cecan']
handler.tags = ['asupan']
handler.command = /^(cecan)$/i
handler.premium = true
handler.limit = true
module.exports = handler
