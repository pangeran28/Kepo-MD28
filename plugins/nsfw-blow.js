let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('lolhuman', '/api/random2/bj', {}, 'apikey'), 'Nih Sayang', wm, 'Lanjut Sayang', '.blow', m)
}
handler.help = ['blow']
handler.tags = ['nsfw']
handler.command = /^(blow)$/i
handler.premium = true
handler.limit true
module.exports = handler
