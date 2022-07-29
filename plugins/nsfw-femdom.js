let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('lolhuman', '/api/random/nsfw/hentaifemdom', {}, 'apikey'), 'Nih Sayang', wm, 'Lanjut Sayang', '.femdom', m)
}
handler.help = ['femdom']
handler.tags = ['nsfw']
handler.command = /^(femdom)$/i
handler.premium = true
handler.limit = true
module.exports = handler
