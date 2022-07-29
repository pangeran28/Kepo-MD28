let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('lolhuman', '/api/random2/tits', {}, 'apikey'), 'Nih Sayang', wm, 'Lanjut Sayang', '.tits', m)
}
handler.help = ['tits']
handler.tags = ['nsfw']
handler.command = /^(tits)$/i
handler.premium = true
handler.limit = true
module.exports = handler
