let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('lolhuman', '/api/random/nsfw/blowjob', {}, 'apikey'), 'Nih Sayang', wm, 'Lanjut Sayang', '.blowjob', m)
}
handler.help = ['blowjob']
handler.tags = ['nsfw']
handler.command = /^(blowjob)$/i
handler.premium = true
handler.limit = true
module.exports = handler
