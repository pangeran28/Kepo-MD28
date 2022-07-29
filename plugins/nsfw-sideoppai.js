let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('lolhuman', '/api/random/nsfw/sideoppai', {}, 'apikey'), 'Nih Sayang', wm, 'Lanjut Sayang', '.sideoppai', m)
}
handler.help = ['sideoppai']
handler.tags = ['nsfw']
handler.command = /^(sideoppai)$/i
handler.premium = true
handler.limit = true
module.exports = handler
