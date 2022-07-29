let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('lolhuman', '/api/random/nsfw/chiisaihentai', {}, 'apikey'), 'Nih Sayang', wm, 'Lanjut Sayang', '.nsfwloli', m)
}
handler.help = ['nsfwloli']
handler.tags = ['nsfw']
handler.command = /^(nsfwloli)$/i
handler.premium = true
handler.limit = true
module.exports = handler
