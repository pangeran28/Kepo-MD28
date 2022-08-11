/*let limit = 10
let fetch = require('node-fetch')
const { servers, ytv } = require('../lib/y2mate')
let handler = async (m, { conn, args, isPrems, isOwner, text }) => {
    if (!text) throw 'Masukkan Link\n\nContoh: .ytv720 https://youtube.com/xxxxxx'
  let res = await xfar.Youtube(text)
m.reply('```Lain Kali Download Sendiri Mek...```')
conn.sendFile(m.chat,res.medias[2].url, '', `Youtube Downloader
720p
jika masih blur, berarti videonya emang ngeblur dari youtubenya
Atau bisa jadi faktor *MUKA*`, m)

}
handler.help = ['ytv720 <url>']
handler.tags = ['internet']
handler.command = /^ytv720$/i
handler.register = true
handler.premium = true
handler.limit = true

module.exports = handler

async function shortlink(url) {
isurl = /https?:\/\//.test(url)
return isurl ? (await require('axios').get('https://tinyurl.com/api-create.php?url='+encodeURIComponent(url))).data : ''
}*/
