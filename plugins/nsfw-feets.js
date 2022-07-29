let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('lolhuman', '/api/random/nsfw/animefeets', {}, 'apikey'), 'Nih Sayang', wm, 'Lanjut Sayang', '.feets', m)
}
handler.help = ['feets']
handler.tags = ['nsfw']
handler.command = /^(feets)$/i
handler.premium = true
handler.limit = true
module.exports = handler
