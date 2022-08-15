let handler = async (m, { conn, command }) => {
let nyenye = `https://api.waifu.pics/nsfw/neko`
    conn.sendButtonImg(m.chat, nyenye, `Nihh @${m.sender.split('@')[0]} Jangan Sagne Om!`, wm, `Next Sayang`, `.${command}`, m) 
}
handler.help = ['nsfwneko']
handler.tags = ['nsfw']
handler.command = /^(nsfwneko|nekonsfw)$/i
handler.premium = true
handler.private = false
handler.limit = true
handler.register = true

module.exports = handler
