let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('lolhuman', '/api/random2/cum_jpg', {}, 'apikey'), 'Nih Sayang', wm, 'Lanjut Sayang', '.cum', m)
}
handler.help = ['cum']
handler.tags = ['nsfw']
handler.command = /^(cum)$/i
handler.premium = true
handler.limit = true
module.exports = handler
