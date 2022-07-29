let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('lolhuman', '/api/random/nsfw/neko', {}, 'apikey'), 'Nih Sayang', wm, 'Lanjut Sayang', '.nsfwneko', m)
}
handler.help = ['nsfwneko']
handler.tags = ['nsfw']
handler.command = /^(nsfwneko)$/i
handler.premium = true
handler.limit = true
module.exports = handler
