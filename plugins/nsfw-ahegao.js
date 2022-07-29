let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('lolhuman', '/api/random/nsfw/ahegao', {}, 'apikey'), 'Nih Sayang', wm, 'Lanjut Sayang', '.ahegao', m)
}
handler.help = ['ahegao']
handler.tags = ['nsfw']
handler.command = /^(ahegao)$/i
handler.premium = true
handler.limit = true
module.exports = handler
