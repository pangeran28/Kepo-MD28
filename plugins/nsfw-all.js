let handler = async (m, { conn, command }) => {
let nyenye = `https://zenzapis.xyz/api/morensfw/${command}?apikey=80b5045dce`
    conn.sendButtonImg(m.chat, nyenye, 'Nihh Jangan Sangne Om:v', wm, 'Next Sayang', `.${command}`, m) 
}
handler.help = ['ahegao', 'ass', 'bdsm', 'blowjob', 'cum', 'cuckold', 'ero', 'femdom', 'foot', 'gangbang', 'glasses', 'hentai', 'hentaigif', 'jahy', 'maid', 'manga', 'neko', 'orgy', 'panties', 'pussy','sfwneko', 'tentacles', 'thighs', 'yuri', 'zettairyouiki']
handler.tags = ['nsfw']
handler.command = /^(ahegao|ass|bdsm|blowjob|cum|cuckold|ero|femdom|foot|gangbang|glasses|hentai|hentaigif|jahy|maid|manga|neko|orgy|panties|pussy|sfwneko|tentacles|thighs|yuri|zettairyouiki)$/i
handler.premium = true
handler.limit = true
handler.register = true
module.exports = handler
