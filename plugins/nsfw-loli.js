const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys-md')
let fetch = require('node-fetch')
   let handler  = async (m, { conn, usedPrefix, command }) => {
   var {age} = db.data.users[m.sender]
   if (age <17) throw conn.reply(m.chat, 'Lu masih di bawah umur jangan dulu deh', m)
   let lolinya = `https://api.lolhuman.xyz/api/random/nsfw/loli?apikey=eafcf901640d1c599ae71519` 
   //conn.sendButtonImg(m.chat, json, 'Jangan coli ya', wm, '➡️ NEXT', `${usedPrefix + command}`, m, false)
   let message = await prepareWAMessageMedia({ image: await(await fetch(lolinya)).buffer()}, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
      templateMessage: {
            hydratedTemplate: {
                imageMessage: message.imageMessage,
                hydratedContentText: `Jangan sagne banh!`,
                hydratedFooterText: wm,
                hydratedButtons: [{
                  index: 0,
                   urlButton: {
                        displayText: `🖼 Url Image`,
                        url: `https://api.lolhuman.xyz/api/random/nsfw/loli?apikey=eafcf901640d1c599ae71519`
                    }
                }, {
                   quickReplyButton: {
                        displayText: `🔞 Get Again`,
                        id: `${usedPrefix}${command}`
                    },
                    selectedIndex: 1
                }]
            }
        }
    }), { userJid: m.participant || m.key.remoteJid, quoted: m });
    return await conn.relayMessage(
        m.key.remoteJid,
        template.message,
        { messageId: template.key.id }
    )
}
handler.help = ['nsfwloli']
handler.tags = ['nsfw']
handler.command = /^(nsfwloli|lolinsfw)$/i
handler.premium = true
handler.private = false
handler.limit = true
handler.register = true

module.exports = handler
