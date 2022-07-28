let handler = async (m, { conn, command }) => {
let nyenye = `https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${lolkey}`
    conn.sendButtonImg(m.chat, nyenye, 'Sudah Crot Sayang', wm, 'Crot Lagi Yuk', `.${command}`, m) 
}
handler.help = ['hollolewd', 'sideoppai', 'animefeets', 'animebooty', 'animethighss', 'animearmpits', 'lewdanimegirls', 'biganimetiddies']
handler.tags = ['nsfw']
handler.command = /^(hollolewd|sideoppai|animefeets|animebooty|animethighss|animearmpits|lewdanimegirls|biganimetiddies)$/i
//buatan hyzer, jgn hapus atuh 😊
module.exports = handler
