let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭─˗ˏˋ *INFORMASI PANGERAN* ´ˎ˗
│ ✎ _Nama_ : ᴋᴏᴋᴏ ᴘᴀ፝֟፝֟ɴɢᴇʀᴀɴ
│ ✎ _Sekolah_ : Sudah Lulus
│ ✎ _Umur_ : 20th
│ ✎ _Asal_ : DKI Jakarta
│ ✎ _Status_ : Sering Dijadikan Pelampiasan
│ ✎ _Youtube_ :
│    https://youtube.com/channel/UC_nKNU3Htf4Bp_wkhj3pVXQ
│ ✎ _Instagram_ : 
│    instagram.com/kokopangeran_
│ ✎ _WhatsApp_ :
│    wa.me/6285929970260
╰───────────────────
`.trim(), m)
}

handler.help = ['infopangeran']
handler.tags = ['main', 'utama']
handler.command = /^(infopangeran)$/i

handler.exp = 150

module.exports = handler
