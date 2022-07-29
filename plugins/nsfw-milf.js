let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('lolhuman', '/api/random/nsfw/milf', {}, 'apikey'), 'Nih Sayang', wm, 'Lanjut Sayang', '.milf', m)
}
handler.help = ['milf']
handler.tags = ['nsfw']
handler.command = /^(milf)$/i
handler.premium = true
handler.limit = true
module.exports = handler
