let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('lolhuman', '/api/random/nsfw/ecchi', {}, 'apikey'), 'Nih Sayang', wm, 'Lanjut Sayang', '.ecchi', m)
}
handler.help = ['ecchi']
handler.tags = ['nsfw']
handler.command = /^(ecchi)$/i
handler.premium = true
handler.limit = true
module.exports = handler
