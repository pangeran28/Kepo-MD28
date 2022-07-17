/*let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let pepe = 'https://telegra.ph/file/be35f3f279c9af2d607e8.jpg'
  let baper = await fetch(pepe).then(a => a.buffer())

  let aine = '79811950242@s.whatsapp.net'
  let a = await conn.profilePictureUrl(conn.user.jid, 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
  let b = await conn.profilePictureUrl(owner[0]+'@s.whatsapp.net', 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
  let c = pickRandom([a, b])
  let d = await fetch(c).then(a => a.buffer())
  let prepare = await require('@adiwajshing/baileys').generateWAMessageFromContent(m.key.remoteJid,{listMessage:{
  title: `${await conn.getName(conn.user.jid)}`,
  description: ` *• SEWA BOT & UP TO PREMIUM •*
        
_*👤Grup / 30 Hari*_
_*✔️Rp. 15.000 Dana*_
_*✔️Rp. 15.000 Pulsa MyXL*_

_*👤Premium / 30 Hari*_
_*✔️Rp. 10.000 Dana*_
_*✔️Rp. 10.000 Pulsa MyXL*_

_*👥Premium + Grup / 30 Hari*_
_*✔️Rp. 20.000 Dana*_
_*✔️Rp. 20.000 Pulsa MyXL*_

wa.me/${owner[0]}
*Bukan Bot!!!*
*Owner ${conn.user.name}*
`,
  buttonText: 'Harga Sesuai Pasaran',
  listType: 2,
  productListInfo: {
  productSections: [{
  title:'Klik untuk order',
  products:[{productId:'7487741964584083'}]}],
  headerImage: { productId: '7487741964584083',
  jpegThumbnail: baper },
  businessOwnerJid: `79811950242@s.whatsapp.net`
  },
  footerText: 'https://MendingTuru.github.io',
  }},{})
  conn.relayMessage(prepare.key.remoteJid,prepare.message,{messageId:prepare.key.id})
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)

}
handler.help = ['sewa', 'premium']
handler.tags = ['main']
handler.command = /^(sewa|premium)$/i

module.exports = handler

function pickRandom(list) {
        return list[Math.floor(Math.random() * list.length)]
    }*/


const {
  //default: makeWASocket,
  //useSingleFileAuthState,
  WAMessage,
  proto,
  generateWAMessageFromContent
} = require('@adiwajshing/baileys-md')
let handler = async (m, {
  conn
}) => {
  let kontol = `╭━━•✵ ⃟  ⃟  ⃟✵•
┃
┃ *SEWA BOT : ↷↷*
┃ 
┃ *⸙ ુོ➪ Apa saja keuntungan premium?
┃ *〲 ✅Dapatkan fitur khusus premium.
┃ *〲 ✅Masukkan bot ke group anda.
┃ *〲 ✅Limit UNLIMITED (Tidak Terbatas)
┃ 
┃ Ayo gabung bersama mereka yang sudah Premium dan mendapatkan banyak keuntungan dengan akses semua fitur bot.
┃  © ᵈʳᴋᴏᴋᴏ ᴘᴀ፝֟፝֟ɴɢᴇʀᴀɴ×፝֟͜×
┃ *─★‧ﾟ
╰━━━━━━━━⸙
Pembayaran:
Saweria: https://saweria.co/kokopangeran (+5.000)
Dana: 087832147584
MyXL: 087832147584
  
「Syarat dan Ketentuan」
1. Bot akan keluar jika sudah waktu nya keluar
2. Jangan di kick
3. Mematuhi syarat dan ketentuan bot pada #rules
4. Di larang mengirimkan sesuatu yang mengganggu, contoh: virtex, berbagai macam bug.
5. Di larang spam dalam penggunaan
  `.trim()
  //conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
  const template = generateWAMessageFromContent(m.key.remoteJid, proto.Message.fromObject({
      listMessage: {
          title: `${ucapan()} ${await conn.getName(m.sender)}\nHave A Great Day`,
          description: kontol,
          buttonText: 'Daftar Harga Dan Opsi',
          listType: 1,
          footerText: wm,
          mtype: 'listMessage',
          sections: [{
              title: "Silahkan di pilih",
              rows: [{
                      title: 'Premium',
                      description: "Rp50.000\nDapatkan fitur Premium Permanent.",
                      rowId: "#masuk"
                  },
                  {
                      title: '4 Bulan',
                      description: "Rp40.000\nSewa bot ke dalam grup selama 4 bulan.",
                      rowId: "#masuk"
                  },
                  {
                      title: '3 Bulan',
                      description: "Rp30.000\nSewa bot ke dalam grup selama 3 bulan.",
                      rowId: "#masuk"
                  },
                  {
                      title: '2 Bulan',
                      description: "Rp20.000\nSewa bot ke dalam grup selama 2 bulan.",
                      rowId: "#masuk"
                  },
                  {
                      title: '1 Bulan',
                      description: "Rp10.000\nSewa bot ke dalam grup selama 1 bulan.",
                      rowId: "#masuk"
                  },
                  {
                      title: '2 Minggu',
                      description: "Rp7.000\nSewa bot ke dalam grup selama 2 minggu.",
                      rowId: "#masuk"
                  },
                  {
                      title: '1 Minggu',
                      description: "Rp5.000\nSewa bot ke dalam grup selama 1 minggu.",
                      rowId: ".konfir Saya ignin mendaftarkan 1 minggu"
                  },
                  {
                      title: '12 Jam',
                      description: "Rp.0\nMemasukkan bot ke dalam grup selama 12 Jam(-10 limit)",
                      rowId: ".joinf"
                  },
                  {
                      title: 'Peraturan Bot',
                      description: "Kebijakan Privasi, Syarat Ketentuan dan Peraturan.",
                      rowId: ".rules"
                  },
                  {
                      title: 'Join?',
                      description: "Cara Memasukkan Bot Ke Grup.",
                      rowId: ".panduanadd"
                  }
              ]
          }]
      }
  }), {
      userJid: m.participant || m.key.remoteJid,
      quoted: m
  });
  return await conn.relayMessage(
      m.key.remoteJid,
      template.message, {
          messageId: template.key.id
      }
  )
}
handler.tags = ['main']
handler.command = /^(sewa)$/i
handler.help = ['sewa']
module.exports = handler

function ucapan() {
  const time = (new Date().getUTCHours() + 7) % 24
  res = "Woi. Pagi"
  if (time >= 4) {
      res = "Selamat Pagi"
  }
  if (time >= 12) {
      res = "Selamat Siang"
  }
  if (time >= 15) {
      res = "Selamat Sore"
  }
  if (time >= 19) {
      res = "Selamat Malam"
  }
  return res
}k
