let handler = async (m, { conn, command }) => {
let nyenye = `https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=3bb99b19ba15e6a65ee4f6dd`
    conn.sendButtonImg(m.chat, nyenye, `Nihh @${m.sender.split('@')[0]} Jangan Sagne Om!`, wm, `Next Sayang`, `.${command}`, m) 
}
handler.help = ['hollolewd', 'sideoppai', 'animefeets', 'animebooty', 'animethighss', 'animearmpits', 'lewdanimegirls', 'biganimetiddies']
handler.tags = ['nsfw']
handler.command = /^(hollolewd|sideoppai|animefeets|animebooty|animethighss|animearmpits|lewdanimegirls|biganimetiddies)$/i
handler.premium = true
handler.limit = true
handler.register = true
module.exports = handler
