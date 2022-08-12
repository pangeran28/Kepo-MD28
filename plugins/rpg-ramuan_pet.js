let handler = async (m, { conn, args, usedPrefix }) => {
    let type = (args[0] || '').toLowerCase()
    let timebah = 600000
    let timeda = 600000
    let timecing = 600000
    let timejing = 600000
    let timeher = 600000
    let rubah = global.db.data.users[m.sender].rubah
    let kuda = global.db.data.users[m.sender].kuda
    let kucing = global.db.data.users[m.sender].kucing
    let anjing = global.db.data.users[m.sender].anjing
    let hero = global.db.data.users[m.sender].hero
    switch (type) {
        case 'rubah':
            if (rubah == 0) return m.reply('*Kamu belum memiliki Pet Rubah*')
            if (rubah == 5) return m.reply('*Pet kamu dah lvl max*')
            let __waktur = (new Date - global.db.data.users[m.sender].ramuanrubahlast)
            let _waktur = (600000 - __waktur)
            let waktur = clockString(_waktur)
            if (new Date - global.db.data.users[m.sender].ramuanrubahlast > 600000) {
                if (global.db.data.users[m.sender].ramuan > 0) {
                    global.db.data.users[m.sender].ramuan -= 1
                    global.db.data.users[m.sender].anakrubah += 200
                    global.db.data.users[m.sender].ramuanrubahlast = new Date * 1
                    conn.reply(m.chat, `Berhasil memberi ramuan pet ${type}`, m)
                    setTimeout(() => {
                         conn.reply(m.chat, 'Waktunya memberi ramuan pet *Rubah*', m)
                    }, timebah)
                    if (rubah > 0) {
                        let naiklvl = ((rubah * 1000) - 1)
                        if (global.db.data.users[m.sender].anakrubah > naiklvl) {
                            global.db.data.users[m.sender].rubah += 1
                            global.db.data.users[m.sender].anakrubah -= (rubah * 1000)
                            conn.reply(m.chat, `*Selamat Pet Rubah kamu naik level*`, m)
                        }
                    }
                } else m.reply(`Ramuan pet kamu tidak cukup`)
            } else m.reply(`Pet kamu sudah meminum ramuan, coba beberapa *${waktur}* lagi`)
            break
        case 'kuda':
            if (kuda == 0) return m.reply('*Kamu belum memiliki Pet Kuda*')
            if (kuda == 5) return m.reply('*Pet kamu dah lvl max*')
            let __waktuk = (new Date - global.db.data.users[m.sender].ramuankudalast)
            let _waktuk = (600000 - __waktuk)
            let waktuk = clockString(_waktuk)
            if (new Date - global.db.data.users[m.sender].ramuankudalast > 600000) {
                if (global.db.data.users[m.sender].ramuan > 0) {
                    global.db.data.users[m.sender].ramuan -= 1
                    global.db.data.users[m.sender].anakkuda += 200
                    global.db.data.users[m.sender].ramuankudalast = new Date * 1
                    conn.reply(m.chat, `Berhasil memberi ramuan pet ${type}`, m)
                    setTimeout(() => {
                         conn.reply(m.chat, 'Waktunya memberi ramuan pet *Kuda*', m)
                    }, timeda)
                    if (kuda > 0) {
                        let naiklvl = ((kuda * 1000) - 1)
                        if (global.db.data.users[m.sender].anakkuda > naiklvl) {
                            global.db.data.users[m.sender].kuda += 1
                            global.db.data.users[m.sender].anakkuda -= (kuda * 1000)
                            conn.reply(m.chat, `*Selamat Pet Kuda kamu naik level*`, m)
                        }
                    }
                } else m.reply(`Ramuan pet kamu tidak cukup`)
            } else m.reply(`Pet kamu sudah meminum ramuan, coba beberapa *${waktuk}* lagi`)
            break
        case 'kucing':
            if (kucing == 0) return m.reply('*Kamu belum memiliki Pet Kucing*')
            if (kucing == 5) return m.reply('*Pet kamu dah lvl max*')
            let __waktu = (new Date - global.db.data.users[m.sender].ramuankucinglast)
            let _waktu = (600000 - __waktu)
            let waktu = clockString(_waktu)
            if (new Date - global.db.data.users[m.sender].ramuankucinglast > 600000) {
                if (global.db.data.users[m.sender].ramuan > 0) {
                    global.db.data.users[m.sender].ramuan -= 1
                    global.db.data.users[m.sender].anakkucing += 200
                    global.db.data.users[m.sender].ramuankucinglast = new Date * 1
                    conn.reply(m.chat, `Berhasil memberi ramuan pet ${type}`, m)
                    setTimeout(() => {
                         conn.reply(m.chat, 'Waktunya memberi ramuan pet *Kucing*', m)
                    }, timecing)
                    if (kucing > 0) { 
                        let naiklvl = ((kucing * 1000) - 1)
                        if (global.db.data.users[m.sender].anakkucing > naiklvl) {
                            global.db.data.users[m.sender].kucing += 1
                            global.db.data.users[m.sender].anakkucing -= (kucing * 1000)
                            conn.reply(m.chat, `*Selamat Pet Kucing kamu naik level*`, m)
                        }
                    }
                } else m.reply(`Ramuan pet kamu tidak cukup`)
            } else m.reply(`Pet kamu sudah meminum ramuan, coba beberapa *${waktu}* lagi`)
            break
        case 'anjing':
            if (anjing == 0) return m.reply('*Kamu belum memiliki Pet Anjing*')
            if (anjing == 5) return m.reply('*Pet kamu dah lvl max*')
            let __waktur = (new Date - global.db.data.users[m.sender].ramuananjinglast)
            let _waktur = (600000 - __waktur)
            let waktur = clockString(_waktur)
            if (new Date - global.db.data.users[m.sender].ramuananjinglast > 600000) {
                if (global.db.data.users[m.sender].ramuan > 0) {
                    global.db.data.users[m.sender].ramuan -= 1
                    global.db.data.users[m.sender].anakanjing += 200
                    global.db.data.users[m.sender].ramuananjinglast = new Date * 1
                    conn.reply(m.chat, `Berhasil memberi ramuan pet ${type}`, m)
                    setTimeout(() => {
                         conn.reply(m.chat, 'Waktunya memberi ramuan pet *Anjing*', m)
                    }, timebah)
                    if (anjing > 0) {
                        let naiklvl = ((anjing * 1000) - 1)
                        if (global.db.data.users[m.sender].anakanjing > naiklvl) {
                            global.db.data.users[m.sender].anjing += 1
                            global.db.data.users[m.sender].anakanjing -= (anjing * 1000)
                            conn.reply(m.chat, `*Selamat Pet Rubah kamu naik level*`, m)
                        }
                    }
                } else m.reply(`Ramuan pet kamu tidak cukup`)
            } else m.reply(`Pet kamu sudah meminum ramuan, coba beberapa *${waktur}* lagi`)
            break
        case 'hero':
            if (hero == 0) return m.reply('*Kamu belum memiliki Hero*')
            if (hero == 100) return m.reply('*Hero kamu dah lvl max*')
            let __waktuher = (new Date - global.db.data.users[m.sender].ramuanherolast)
            let _waktuher = (600000 - __waktuher)
            let waktuher = clockString(_waktuher)
            if (new Date - global.db.data.users[m.sender].ramuanherolast > 600000) {
                if (global.db.data.users[m.sender].ramuan > 0) {
                    global.db.data.users[m.sender].ramuan -= 1
                    global.db.data.users[m.sender].exphero += 100
                    global.db.data.users[m.sender].ramuanherolast = new Date * 1
                    conn.reply(m.chat, `Berhasil memberi ramuan kepada ${type}`, m)
                    setTimeout(() => {
                         conn.reply(m.chat, 'Waktunya memberi ramuan *Hero*', m)
                    }, timeher)
                    if (hero > 0) { 
                        let naiklvl = ((hero * 500) - 1)
                        if (global.db.data.users[m.sender].exphero > naiklvl) {
                            global.db.data.users[m.sender].hero += 1
                            global.db.data.users[m.sender].exphero -= (kucing * 500)
                            conn.reply(m.chat, `*Selamat Hero kamu naik level*`, m)
                        }
                    }
                } else m.reply(`Ramuan hero kamu tidak cukup`)
            } else m.reply(`Hero kamu sudah meminum ramuan, coba beberapa *${waktuher}* lagi`)
            break
        default:
            return conn.reply(m.chat, `${usedPrefix}ramuan [hero | kucing | rubah | kuda | naga | centaur | phonix | serigala]\nContoh penggunaan: *${usedPrefix}ramuan kucing*`, m)
    }
}
handler.help = ['ramuan [pet type]']
handler.tags = ['rpg']
handler.command = /^(ramuan)$/i
handler.limit = true
handler.group = true
handler.register = true

module.exports = handler

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
