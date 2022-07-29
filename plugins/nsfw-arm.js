let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('lolhuman', '/api/random/nsfw/animearmpits', {}, 'apikey'), 'Nih Sayang', wm, 'Lanjut Sayang', '.arm', m)
}
handler.help = ['arm']
handler.tags = ['nsfw']
handler.command = /^(arm)$/i
handler.premium = true
handler.limit = true
module.exports = handler
