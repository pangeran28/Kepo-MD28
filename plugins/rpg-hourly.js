let { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn }) => {
    let wm = global.wm
    let user = global.db.data.users[m.sender]
    let _timers = (3600000 - (new Date - user.lasthourly))
    let timers = clockString(_timers) 
    if (new Date - user.lasthourly > 3600000) {
    let ghor = 'https://telegra.ph/file/f7ee012bccf5319151ed7.jpg'
    let str = `+2500 money πΉ\n+1 Legendary crate π§°\n+2 String πΈοΈ\n+2 Iron βοΈ\n+3 Gold πͺ\n+1 Limit π§¬`
        conn.send2ButtonImg(m.chat, ghor, str, wm, 'Claim', '.claim', 'Monthly', '.monthly', m)
        conn.reply(str)
        user.money += 2500
        user.legendary += 1
        user.iron += 2
        user.emas += 2
        user.string += 3
        user.limit += 1
        user.lasthourly= new Date * 1
    } else {
        conn.sendBut(m.chat, `silahkan tunggu *π${timers}* lagi untuk bisa mengclaim lagi`, wm, 'Inventory', '.inv',m )
    }
}
handler.help = ['hourly']
handler.tags = ['rpg']
handler.command = /^(hourly)$/i
handler.group = true
handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
