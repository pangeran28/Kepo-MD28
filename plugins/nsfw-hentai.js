let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('lolhuman', '/api/random2/hentai', {}, 'apikey'), 'Nih Sayang', wm, 'Lanjut Sayang', '.hentai', m)
}
handler.help = ['hentai']
handler.tags = ['nsfw']
handler.command = /^(hentai)$/i
handler.premium = true
handler.limit = true
module.exports = handler
