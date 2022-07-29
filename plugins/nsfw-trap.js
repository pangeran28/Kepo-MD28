let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('lolhuman', '/api/random2/trap', {}, 'apikey'), 'Nih Sayang', wm, 'Lanjut Sayang', '.trap', m)
}
handler.help = ['trap']
handler.tags = ['nsfw']
handler.command = /^(trap)$/i
handler.premium = true
handler.limit = true
module.exports = handler
