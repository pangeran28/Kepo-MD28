let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('lolhuman', '/api/random2/futanari', {}, 'apikey'), 'Nih Sayang', wm, 'Lanjut Sayang', '.futanari', m)
}
handler.help = ['futanari']
handler.tags = ['nsfw']
handler.command = /^(futanari)$/i
handler.premium = true
handler.limit = true
module.exports = handler
