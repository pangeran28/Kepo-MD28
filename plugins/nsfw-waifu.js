let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('lolhuman', '/api/random/nsfw/waifu', {}, 'apikey'), 'Nih Sayang', wm, 'Lanjut Sayang', '.waifunsfw', m)
}
handler.help = ['waifunsfw']
handler.tags = ['nsfw']
handler.command = /^(waifunsfw)$/i
handler.premium = true
handler.limit = true
module.exports = handler
