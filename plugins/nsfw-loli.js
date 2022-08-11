let handler = async (m, { conn, command }) => {
  try {
  var {age} = db.data.users[m.sender]
  if (age <17) throw conn.reply(m.chat, 'Lu masih di bawah umur jangan dulu deh', m) 
  let res = await fetch('https://api.lolhuman.xyz/api/random/nsfw/loli?apikey=eafcf901640d1c599ae71519')
  if (!res.ok) throw m.reply(eror)
  let json = await res.json()
  // (!json.url) throw m.reply(eror)
  conn.sendButtonImg(m.chat, `Nihh @${m.sender.split('@')[0]} jangan sagne ya!`, wm, json.url, `Next`, `${command}`, m, {mentions: [m.sender], jpegThumbnail: await(await fetch(json.url)).buffer() })
  } catch {
    //m.reply(eror)
  }
}
handler.help = ['nsfwloli']
handler.tags = ['nsfw']
handler.command = /^(nsfwloli|lolinsfw)$/i
handler.premium = true
handler.private = false
handler.limit = true
handler.register = true

module.exports = handler
