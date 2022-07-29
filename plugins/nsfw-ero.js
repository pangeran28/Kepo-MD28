let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('lolhuman', '/api/random2/ero', {}, 'apikey'), 'Nih Sayang', wm, 'Lanjut Sayang', '.ero', m)
}
handler.help = ['ero']
handler.tags = ['nsfw']
handler.command = /^(ero)$/i
handler.premium = true
handler.limit = true
module.exports = handler
