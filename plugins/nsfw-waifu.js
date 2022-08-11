let handler = async (m, { conn, command }) => {
  try {
  var {age} = db.data.users[m.sender]
  if (age <17) throw conn.reply(m.chat, 'Lu masih di bawah umur jangan dulu deh', m)
  let res = await fetch('https://api.waifu.pics/nsfw/waifu')
  //if (!res.ok) throw `sorry banh gk nemu, coba lagi<3`
  let json = await res.json()
  if (!json.url) throw m.reply(eror)
  conn.sendButtonImg(m.chat, `Nihh @${m.sender.split('@')[0]} jangan sagne ya!`, wm, json.url, `Next`, `.${command}`, m, {mentions: [m.sender], jpegThumbnail: await(await fetch(json.url)).buffer()})
  } catch {
  
  }
}
handler.help = ['nsfwwaifu']
handler.tags = ['nsfw']
handler.command = /^(nsfwwaifu|waifunsfw)$/i
handler.premium = true
handler.private = false
handler.limit = true
handler.register = true

module.exports = handler
