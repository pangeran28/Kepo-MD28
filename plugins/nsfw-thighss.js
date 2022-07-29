let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('lolhuman', '/api/random/nsfw/animethighss', {}, 'apikey'), 'Nih Sayang', wm, 'Lanjut Sayang', '.thighss', m)
}
handler.help = ['thighss']
handler.tags = ['nsfw']
handler.command = /^(thighss)$/i
handler.premium = true
handler.limit = true
module.exports = handler
