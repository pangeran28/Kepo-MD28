let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('lolhuman', '/api/random2/pussy_jpg', {}, 'apikey'), 'Nih Sayang', wm, 'Lanjut Sayang', '.pussy', m)
}
handler.help = ['pussy']
handler.tags = ['nsfw']
handler.command = /^(pussy)$/i
handler.premium = true
handler.limit = true
module.exports = handler
