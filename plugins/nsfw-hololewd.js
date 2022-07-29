let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('lolhuman', '/api/random/nsfw/hololewd', {}, 'apikey'), 'Nih Sayang', wm, 'Lanjut Sayang', '.hololewd', m)
}
handler.help = ['hololewd']
handler.tags = ['nsfw']
handler.command = /^(hololewd)$/i
handler.premium = true
handler.limit = true
module.exports = handler
