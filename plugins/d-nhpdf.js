/*let { get } = require('axios')
let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Uhm...kode nya mana?'
  await conn.reply(m.chat, wm, 0, { thumbnail: await(await fetch(ext.thum)).buffer(), contextInfo: {
                  externalAdReply: {
                    mediaUrl: 'https://youtu.be/-tKVN2mAKRI',
                    title: ext.title,
                    body: ext.body,
                    thumbnail: await(await fetch(ext.thum)).buffer()
                   }
                 }
               }
           )
  let lol = global.API('lol', `/api/nhentaipdf/${args[0]}`, {}, 'apikey')
  let { result } = (await get(lol)).data
  if (result.includes('HTML')) throw `Code ${args[0]} Not Found!`
   conn.sendMessage(m.chat, await getBuffer(result), 'documentMessage', { quoted: m, filename: `${args[0]}.pdf`, mimetype: 'application/pdf' })
}
handler.help = ['nhpdf'].map(v => v + ' <code>')
handler.tags = ['nsfw']
handler.command = /^(nhpdf|nh)$/i
handler.limit = true
handler.premium = true
handler.register = true
module.exports = handler

async function getBuffer(url) {
k = await require('node-fetch')(url)
a = await k.buffer()
return a 
}*/

let { get } = require('axios')
let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Uhm...kode nya mana?'
  m.reply('Searching....')
  let lol = global.API('lol', `/api/nhentaipdf/${args[0]}`, {}, 'apikey')
  let { result } = (await get(lol)).data
  if (result.includes('HTML')) throw `Code ${args[0]} Not Found!`
   conn.sendMessage(m.chat, await getBuffer(result), 'documentMessage', { quoted: m, filename: `${args[0]}.pdf`, mimetype: 'application/pdf' })
}
handler.help = ['nhpdf'].map(v => v + ' <code>')
handler.tags = ['nsfw']
handler.command = /^(nhpdf)$/i
handler.limit = true
handler.premium = true
handler.register = true
handler.nsfw = true
module.exports = handler

async function getBuffer(url) {
k = await require('node-fetch')(url)
a = await k.buffer()
return a 
}
