let fs = require('fs')

let flaaa = JSON.parse(fs.readFileSync('./api/fla.json'))
let waifu = JSON.parse(fs.readFileSync('./api/waifu.json'))
let data = JSON.parse(fs.readFileSync('./data.json'))


global.owner = JSON.parse(fs.readFileSync('./settings/owner.json')) // Put your number to folder /src/owner.json
global.mods = JSON.parse(fs.readFileSync('./settings/moderator.json')) // Want some help?

global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  amel: 'https://melcanz.com',
  hardianto: 'https://hardianto.xyz',
  lol: 'https://api.lolhuman.xyz',
  adicug: 'https://api.adiofficial.xyz',
  males: 'https://malest.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://api.xteam.xyz': 'HIRO',
  'https://melcanz.com': 'elaina',
  'https://api.lolhuman.xyz': 'sonelganz',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://hardianto.xyz': 'hardianto',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
  'https://api.adiofficial.xyz': 'adiofficial'
}

global.wait = '```▁ ▂ ▄ ▅ ▆ ▇ █𝐬𝐞𝐝𝐚𝐧𝐠 𝐝𝐢 𝐩𝐫𝐨𝐬𝐞𝐬. . .```'
global.eror = '_*мααƒ ѕєяνєя тι∂αк ѕтαвιℓ..*_'
global.Intervalmsg = 1800 //detik

//========Url Template Buttons=========//
global.dtu = 'ɪɴꜱᴛᴀɢʀᴀᴍ'
global.urlnya = "https://www.instagram.com/kokopangeran_"

//============= callButtons =============//
global.dtc = 'ᴄᴀʟʟ ᴏᴡɴᴇʀ'
global.phn = '+62 859-2997-0260'

//============= Games ================//
global.benar = '_*Benar✅*_'
global.salah = '_*Salah❌*_'
global.dikit = "dikit lagi, semangat ya :')"

global.multiplier = 100 // The higher, The harder levelup

// Sticker WM
global.stiker_wait = '```Lain Kali Buat Sendiri Tod...```'
global.packname = data.namabot;
global.author = data.owner;


//=========== Random ==========// 
global.sc = "https://github.com/MendingTuru/Meilana-MD4",
global.kontak = [
  [ "6285929970260", "ᵈʳᴋᴏᴋᴏ ᴘᴀ፝֟፝֟ɴɢᴇʀᴀɴ×፝֟͜×", "ᴅᴇᴠᴇʟᴏᴩᴇʀ ʙᴏᴛ", "pangeran.dwnta01@gmail.com", true ],
  [ "6287832147584", "ᵈʳᴘᴀ፝֟፝֟ɴɢᴇʀᴀɴ-ᴍᴅ×፝֟͜×", "Bot WhatsApp", "Nothing!", true ],
  [ "6287832147584", "ᵈʳᴘᴀ፝֟፝֟ɴɢᴇʀᴀɴ-ᴍᴅ×፝֟͜×", "Bot WhatsApp", "Nothing!", true ]
  ],
global.linkgc = "https://chat.whatsapp.com/JOTpyCQIWcC6wr17Ki7L0n",
global.linkig = "https://www.instagram.com/kokopangeran_",
global.linkgh = "https://github.com/MendingTuru",
global.deslink = " ",
global.titlink = "Folllow me on Instagram",
global.bodlink = "@kokopangeran_",
global.sa = "╭─",
global.gx = "│✇",
global.gy = "│•",
global.gz = "│",
global.sb = "╰────࿐",
global.kki = "「",
global.kka = "」",
global.petik = "```",
global.images = "https://telegra.ph/file/be35f3f279c9af2d607e8.jpg",
global.wmnya = "ву ᵈʳᴋᴏᴋᴏ ᴘᴀ፝֟፝֟ɴɢᴇʀᴀɴ",
global.clg1 = "Ciss 📸",
global.clg2 = "ʙy ᵈʳᴋᴏᴋᴏ ᴘᴀ፝֟፝֟ɴɢᴇʀᴀɴ"


//=========== Requirements ==========//  
       global.colong1 = 'Ciss 📸'
       global.colong2 = 'ʙy ᵈʳᴋᴏᴋᴏ ᴘᴀ፝֟፝֟ɴɢᴇʀᴀɴ×፝֟͜×'
global.img = pickRandom(waifu)
global.fla = pickRandom(flaaa)

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '🧬',
      limit: '🌌',
      healt: '❤️',
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      fishingrod: '🎣',
      pickaxe: '⛏️',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      iron: '⛓️',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      makananpet: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
