let handler = async (m, { conn, command }) => {
let nyenye = `https://api.lolhuman.xyz/api/random2/${command}?apikey=sonelganz}`
    conn.sendButtonImg(m.chat, nyenye, `Nihh @${m.sender.split('@')[0]} Jangan Sagne Om!`, wm, `Next Sayang`, `.${command}`, m) 
}
handler.help = ['lewd', 'eron', 'solo', 'anal', 'keta', 'tits', 'kuni', 'solog', 'erok', 'feetg', 'lewdk', 'erofeet', 'holoero', 'classic', 'erokemo', 'futanari', 'eroyuri', 'yaoi']
handler.tags = ['nsfw']
handler.command = /^(lewd|eron|solo|anal|keta|tits|kuni|solog|erok|feetg|lewdk|erofeet|holoero|classic|erokemo|futanari|eroyuri|yaoi)$/i
handler.limit = true
handler.premium = true
handler.register = true
module.exports = handler
