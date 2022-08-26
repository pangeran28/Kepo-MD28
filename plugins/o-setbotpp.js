const fs = require('fs')
let handler = async (m, { conn, isROwner }) => {
 if (!isROwner) throw false
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
var media = await q.download()
            let botNumber = await conn.user.jid
            var { img } = await conn.generateProfilePicture(media)
            await conn.query({
            tag: 'iq',
            attrs: {
            to: botNumber,
            type:'set',
            xmlns: 'w:profile:picture'
            },
            content: [
            {
            tag: 'picture',
            attrs: { type: 'image' },
            content: img
            }
            ]
            })
            m.reply(`Sukses`)
}
handler.help = ['setbotpp']
handler.tags = ['owner']
handler.command = /^(set(bot)?pp)$/i

handler.owner = true

module.exports = handler


/*let handler = async (m, { conn, isROwner }) => {
    if (!isROwner) throw false
    let bot = conn.user.jid // Bot
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image/.test(mime)) {
        let img = await q.download()
        if (!img) throw `balas gambarnya!`
        conn.updateProfilePicture(bot, img)
        m.reply('```Sukses```')
    }
}
handler.help = ['setbotpp']
handler.tags = ['owner']
handler.command = /^(set(bot)?pp)$/i

module.exports = handler*/
