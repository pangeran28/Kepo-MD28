let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('lolhuman', '/api/random/nsfw/biganimetiddies', {}, 'apikey'), 'Nih Sayang', wm, 'Lanjut Sayang', '.tiddies', m)
}
handler.help = ['tiddies']
handler.tags = ['nsfw']
handler.command = /^(tiddies)$/i
handler.premium = true
handler.limit = true
module.exports = handler
