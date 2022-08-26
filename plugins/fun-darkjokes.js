let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('lol', '/api/meme/darkjoke', {}, 'apikey'), 'Dark Jokes', wm, 'Next!', '.darkjokes', m, {
  contextInfo: { mentionedJid: [m.sender],
    externalAdReply :{
    showAdAttribution: true,
    mediaUrl: data.sc,
    mediaType: 2,
    description: data.deslink , 
    title: run,
    body: wm, 
    thumbnail: bg,
    sourceUrl: data.sc
     }}
  })
}
handler.help = ['darkjokes']
handler.tags = ['internet']
handler.command = /^(dragjokes|darkjokes)$/i
handler.limit = true
handler.register = true
module.exports = handler


/*let handler = async (m, { conn }) => {
let rest = 'https://api.zacros.my.id/randomimg/darkjokes'
    conn.sendButtonImg(m.chat, rest, 'Dark? 🤨', wm, 'NEXT', '.darkjokes', m)
}
handler.help = ['darkjokes']
handler.tags = ['internet', 'fun']
handler.command = /^(dragjokes|darkjokes)$/i

module.exports = handler*/
