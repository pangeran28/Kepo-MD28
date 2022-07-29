let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('lolhuman', '/api/random2/nsfw_avatar', {}, 'apikey'), 'Nih Sayang', wm, 'Lanjut Sayang', '.avatar', m)
}
handler.help = ['avatar']
handler.tags = ['nsfw']
handler.command = /^(avatar)$/i
handler.premium = true
handler.limit = true
module.exports = handler
