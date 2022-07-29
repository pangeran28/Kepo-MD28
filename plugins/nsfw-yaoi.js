let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('lolhuman', '/api/random/nsfw/yaoi', {}, 'apikey'), 'Nih Sayang', wm, 'Lanjut Sayang', '.yaoi', m)
}
handler.help = ['yaoi']
handler.tags = ['nsfw']
handler.command = /^(yaoi)$/i
handler.premium = true
handler.limit = true
module.exports = handler
