let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('lolhuman', '/api/random2/solo', {}, 'apikey'), 'Nih Sayang', wm, 'Lanjut Sayang', '.solo', m)
}
handler.help = ['solo']
handler.tags = ['nsfw']
handler.command = /^(solo)$/i
handler.premium = true
handler.limit = true
module.exports = handler
