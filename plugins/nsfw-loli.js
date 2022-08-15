let handler = async (m, { conn, command }) => {
let nyenye = `https://api.lolhuman.xyz/api/random/nsfw/loli?apikey=eafcf901640d1c599ae71519`
    conn.sendButtonImg(m.chat, nyenye, `Nihh @${m.sender.split('@')[0]} Jangan Sagne Om!`, wm, `Next Sayang`, `.${command}`, m) 
}
handler.help = ['nsfwloli']
handler.tags = ['nsfw']
handler.command = /^(nsfwloli|lolinsfw)$/i
handler.premium = true
handler.private = false
handler.limit = true
handler.register = true

module.exports = handler
