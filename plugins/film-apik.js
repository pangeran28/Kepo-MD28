let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
    let res = await fetch(`https://api-xcoders.xyz/api/filmapik/trending?apikey=xcoders`)
    if (!res.ok) throw await res.text()
    let json = await res.json()
    let keqing = json.result.map((v, i) => `#${i + 1}. \n*Title:* ${v.title}\n*Rsting:* ${v.info}\n*Link:* ${v.url}\n\n`).join('\n') 
    if (json.status) await
conn.reply(m.chat, keqing, ftroli)
    else throw json
}
handler.help = ['filmapik']
handler.tags = ['film']
handler.command = /^(filmapik)$/i
handler.premium = true
handler.register = true
handler.limit = true

module.exports = handler
