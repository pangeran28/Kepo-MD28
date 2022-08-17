let levelling = require('../lib/levelling')
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
const defaultMenu = {
  before: `
┏──『 *ᴘᴀ፝֟፝֟ɴɢᴇʀᴀɴ-ᴍᴅ* 』──⬣
┆         *Hai*, %name 
┗┬──────────────┈ ⳹
┏┆⬡ *Tersisa* : %limit Limit
┆┆⬡ *Role* : %role
┆┆⬡ *Level* : %level [%exp / %maxexp]
┆┆⬡ *Exp* : %totalexp XP
┗┬──────────────┈ ⳹
┏┤             *Kalender*
┆┗──────────────┈ ⳹
┆⬡ *Hari* : %week %weton
┆⬡ *Tanggal* : %week %weton, %date
┆⬡ *Tanggal Islam* : %dateIslamic
┆⬡ *Waktu* : %time
┗┬──────────────┈ ⳹
┏┤             *Bot Info*
┆┗──────────────┈ ⳹
┆⬡ *Uptime* : %uptime
┆⬡ *Run Bot* : Panel/RDP
┆⬡ *Bailyes Version* : 4.2.0
┆⬡ *Database* : %rtotalreg dari %totalreg
┆⬡ *Memory Used* : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
┆⬡ *Github* :
┆⬡ https://github.com/MendingTuru
┗────────────────⬣
%readmore`.trim(),
  header: '┏━┈┈『 %category 』┈┈⬣',
  body: '┆⬡ %cmd %islimit %isPremium',
  footer: '┗━───────⬣\n',
  after: `
*%npmname@^%version*
${'```%npmdesc```'}
`,
}
let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
    let bzz = './src/tmp.mp3'
  let tags
  let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['all', 'game', 'xp', 'vote', 'sticker', 'kerangajaib', 'quotes', 'admin', 'group', 'premium', 'anime', 'film', 'internet', 'anonymous', 'maker', 'nsfw', 'downloader', 'tools', 'fun', 'database', 'quran', 'audio', 'jadibot', 'info', 'tanpakategori', 'owner']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
    'main': 'UTAMA',
    'game': 'Game',
    'rpg': 'RPG',
    'xp': 'EXP & LIMIT',
    'sticker': 'STIKER',
    'kerang': 'KERANG AJAIB',
    'quotes': 'QUOTES',
    'group': 'GROUP',
    'premium': 'PREMIUM',
    'anime': 'ANIME',
    'film': 'NONTON FILM',
    'internet': 'INTERNET',
    'anonymous': 'ANONYMOUS CHAT',
    'maker': 'MAGERNULIS & LOGO',
    'nsfw': 'ANIME HENTAI',
    'asupan': 'ASUPAN 18+',
    'bokep': 'BOKEP 22+',
    'downloader': 'DOWNLOADER',
    'tools': 'TOOLS',
    'fun': 'FUN',
    'database': 'DATABASE',
    'vote': 'VOTING',
    'absen': 'ABSEN',
    'quran': 'AL QUR\'AN',
    'audio': 'PENGUBAH SUARA',
    'jadibot': 'JADI BOT',
    'info': 'INFO',
    '': 'TANPA KATEGORI',
  }
  if (teks == 'game') tags = {
    'game': 'GAME',
    'rpg': 'RPG'
  }
  if (teks == 'xp') tags = {
    'xp': 'EXP & LIMIT'
  }
  if (teks == 'sticker') tags = {
    'sticker': 'STIKER'
  }
  if (teks == 'kerangajaib') tags = {
    'kerang': 'KERANG AJAIB'
  }
  if (teks == 'quotes') tags = {
    'quotes': 'QUOTES'
  }
  if (teks == 'group') tags = {
    'group': 'GROUP'
  }
  if (teks == 'premium') tags = {
    'premium': 'PREMIUM'
  }
  if (teks == 'anime') tags = {
    'anime': 'ANIME'
  }
  if (teks == 'film') tags = {
    'film': 'NONTON FILM'
  }
  if (teks == 'internet') tags = {
    'internet': 'INTERNET'
  }
  if (teks == 'anonymous') tags = {
    'anonymous': 'ANONYMOUS CHAT'
  }
  if (teks == 'maker') tags = {
    'maker': 'MAGERNULIS & LOGO'
  }
  if (teks == 'nsfw') tags = {
    'nsfw': 'ANIME HENTAI',
    'asupan': 'ASUPAN 18+',
    'bokep': 'BOKEP 22+'
  }
  if (teks == 'downloader') tags = {
    'downloader': 'DOWNLOADER'
  }
  if (teks == 'tools') tags = {
    'tools': 'TOOLS'
  }
  if (teks == 'fun') tags = {
    'fun': 'FUN'
  }
  if (teks == 'database') tags = {
    'database': 'DATABASE'
  }
  if (teks == 'vote') tags = {
    'vote': 'VOTING',
    'absen': 'ABSEN'
  }
  if (teks == 'quran') tags = {
    'quran': 'AL QUR\'AN'
  }
  if (teks == 'audio') tags = {
    'audio': 'PENGUBAH SUARA'
  }
  if (teks == 'jadibot') tags = {
    'jadibot': 'JADI BOT'
  }
  if (teks == 'info') tags = {
    'info': 'INFO'
  }
  if (teks == 'tanpakategori') tags = {
    '': 'TANPA KATEGORI'
  }
  if (teks == 'owner') tags = {
    'owner': 'OWNER',
    'host': 'HOST',
    'advanced': 'ADVANCED'
  }



  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { exp, limit, age, money, level, role, premium, registered } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let umur = `*${age == '-1' ? 'Belum Daftar*' : age + '* Thn'}`
    let name = registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
    const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
    const wib = moment.tz('Asia/Jakarta').format("HH:mm:ss")
    const hariRaya = new Date('January 1, 2023 23:59:59')
    const sekarang = new Date().getTime()
    const Selisih = hariRaya - sekarang
    const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
    const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60))
    const ddetik = Math.floor( Selisih % (1000 * 60) / 1000)
    const hariRayaramadan = new Date('April 21, 2023 23:59:59')
    const sekarangg = new Date().getTime()
    const lebih = hariRayaramadan - sekarangg
    const harii = Math.floor( lebih / (1000 * 60 * 60 * 24));
    const jamm = Math.floor( lebih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const menitt = Math.floor( lebih % (1000 * 60 * 60) / (1000 * 60))
    const detikk = Math.floor( lebih % (1000 * 60) / 1000)
    const ultah = new Date('February 21, 2023 23:59:59')
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
    let pe = '```'
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    global.jam = time
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.help) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    if (teks == '404') {
      let judul = `${global.ucapan}, ${name}`.trim()
      const sections = [
      {
        title: 'List Menu ' + namabot,
        rows: [
          { title: '📌SEMUA PERINTAH', description: 'Fitur ALLMENU Kidz', rowId: `${_p}? all` },
          { title: '🎮GAME BOT', description: 'Fitur Game Kidz', rowId: `${_p}? game` },
          { title: '🌐XP & LEVEL', description: 'Fitur xp & lvl Kidz ', rowId: `${_p}? xp` },
          { title: '📃STICKER', description: 'Fitur Sticker Kidz', rowId: `${_p}? sticker` },
          { title: '🐚KERANG AJAIB', description: 'Fitur Kerang Kidz', rowId: `${_p}? kerangajaib` },
          { title: '🌀QUOTES BOT', description: 'Fitur Quotes Kidz', rowId: `${_p}? quotes` },
          { title: '🗿GROUP BOT', description: 'Fitur Khusus Group Kidz', rowId: `${_p}? group` },
          { title: '✨PREMIUM', description: 'Fitur Khusus Prem Kidz', rowId: `${_p}? premium` },
          { title: '💨ANIME', description: 'Fitur Khusus Wibu Kidz', rowId: `${_p}? anime` },
          { title: '🎬NONTON FILM', description: 'Fitur Nonton Film Kidz', rowId: `${_p}? film` },
          { title: '🗼INTERNET', description: 'Fitur Internet Kidz', rowId: `${_p}? internet` },
          { title: '🔞FITUR DEWASA 22+', description: 'Fitur Khusus 22+ Kidz', rowId: `${_p}? nsfw` },
          { title: '🎭ANONYMOUS', description: 'Fitur Nyari Teman Kidz', rowId: `${_p}? anonymous` },
          { title: '📝NULIS & LOGO', description: 'Fitur Nulis & Logo Kidz', rowId: `${_p}? maker` },
          { title: '📺DOWNLOADER', description: 'Fitur Download Kidz', rowId: `${_p}? downloader` },
          { title: '🔧TOOLS BOT', description: 'Fitur Tools Kidz', rowId: `${_p}? tools` },
          { title: '😄FUN BOT', description: 'Fitur Ceria Kidz', rowId: `${_p}? fun`},
          { title: '💾DATABASE', description: 'Fitur Database Kidz', rowId: `${_p}? database` },
          { title: '💥VOTE & ABSEN', description: 'Fitur Absen Kidz', rowId: `${_p}? vote` },
          { title: "📓AL-QUR\'AN", description: 'Fitur Muslim Kidz', rowId: `${_p}? quran` },
          { title: '🎤PENGUBAH SUARA', description: 'Fitur Pengubah Suara Kidz', rowId: `${_p}? audio` },
          { title: '👺JADI BOT', description: 'Fitur JadiBot Kidz', rowId: `${_p}? jadibot` },
          { title: '⭐INFO BOT', description: 'Fitur Info Bot Kidz', rowId: `${_p}? info` },
          { title: '🌟THANKS TO', description: 'Terimakasih Contributors', rowId: `${_p}tqto` },
          { title: '👤OWNER BOT', description: 'Fitur Owner Kidz', rowId: `${_p}? owner` },
        ]
      }
    ]
    const listMessage = {
          text: `
✧───···[ Dashboard ]···───✧      
│
❏ 𝙄𝙉𝙁𝙊 𝙐𝙎𝙀𝙍
│⬡ Nama : ${name}
│⬡ Uang : ${money}
│⬡ Limit : ${limit} 
│⬡ Premium : ${premium ? '✅' : '❌'}
┴
├━━━━━━━━━━━━━━━━┈─⋆
┬
❏ 𝙏𝙄𝙈𝙀
│⬡ Wib : ${time}
│⬡ Tanggal : ${week} ${weton} ${date}
┴
├━━━━━━━━━━━━━━━━┈─⋆
┬
❏ 𝙏𝘼𝙃𝙐𝙉 𝘽𝘼𝙍𝙐
│⬡ _${jhari} Hari ${jjam} Jam ${mmmenit} Menit ${ddetik} Detik_
┴
├━━━━━━━━━━━━━━━━┈─⋆
┬
❏ 𝙍𝘼𝙈𝘼𝘿𝘼𝙉
│⬡ _${harii} Hari ${jamm} Jam ${menitt} Menit ${detikk} Detik_
┴
├━━━━━━━━━━━━━━━━┈─⋆
┬
❏ 𝙐𝙇𝘼𝙉𝙂 𝙏𝘼𝙃𝙐𝙉 𝙊𝙒𝙉𝙀𝙍
│⬡ _${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik_
┴
┬
├━━━━━━━━━━━━━━━━┈─⋆
│ ▸ *Author :* ᵈʳᴋᴏᴋᴏ ᴘᴀ፝֟፝֟ɴɢᴇʀᴀɴ
┴ ▸ *Owner :* ᵈʳᴋᴏᴋᴏ ᴘᴀ፝֟፝֟ɴɢᴇʀᴀɴ
✧
┬ 📌 𝗣𝗶𝗻𝗻𝗲𝗱 :
│ Tolong Jangan Dispam ya Biar Ga Delay
╰━━━━━━━━━━━━━━━━┈─◂
`,
      footer: `       ▌│█║▌║▌║║▌║▌║█│▌`,
      title: judul,
      buttonText: "Klik Sayang",
      sections
    }
    return conn.sendMessage(m.chat, listMessage, { quoted: m, mentions: await conn.parseMention(judul), contextInfo: { forwardingScore: 99999, isForwarded: true }})
    
    }

    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Dipersembahkan oleh https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(Limit)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Premium)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      ucapan: global.ucapan,
      p: _p, uptime, muptime,
      me: conn.user.name,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp <= 0 ? `Siap untuk *${_p}levelup*` : `${max - exp} XP lagi untuk levelup`,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, name, umur, money, age, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role, premium,
      readmore: readMore
    }
    m.reply('_Tunggu Sebentar Sayang. . ._')
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    await conn.send3TemplateButtonImg(m.chat, fla + teks, text.trim(), wm, `🏅KOKO`, `${_p}owner`, `🎖RULES`, `${_p}rules`, `🎗 DONASI 🎗`, `${_p}donasi`)
    await conn.sendFile(m.chat, bzz, 'audio.opus', null, m, true, { duration: 999999999 })
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(m(enu)?|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = "Selamat dinihari"
  if (time >= 4) {
    res = "Selamat pagi"
  }
  if (time > 10) {
    res = "Selamat siang"
  }
  if (time >= 15) {
    res = "Selamat sore"
  }
  if (time >= 18) {
    res = "Selamat malam"
  }
  return res
}
