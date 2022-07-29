let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('lolhuman', '/api/random/nsfw/animebooty', {}, 'apikey'), 'Nih Sayang', wm, 'Lanjut Sayang', '.booty', m)
}
handler.help = ['booty']
handler.tags = ['nsfw']
handler.command = /^(booty)$/i
handler.premium = true
handler.limit = true
module.exports = handler
