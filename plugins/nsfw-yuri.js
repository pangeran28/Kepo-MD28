let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('lolhuman', '/api/random2/yuri', {}, 'apikey'), 'Nih Sayang', wm, 'Lanjut Sayang', '.yuri', m)
}
handler.help = ['yuri']
handler.tags = ['nsfw']
handler.command = /^(yuri)$/i
handler.premium = true
handler.limit = true
module.exports = handler
