let regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let fetch = require('node-fetch')
let handler = async (m, { args, usedPrefix, command }) => {

    if (!args[0]) throw 'link githubnya mana? contoh: https://github.com/mendingturu/meilana-md4'

    if (!regex.test(args[0])) throw 'link salah bodoh!'

    let [, user, repo] = args[0].match(regex) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    // `attachment; filename=${user}/${repo}.zip`
    m.reply(`*Mohon tunggu, sedang mengirim repository..*`)
    conn.sendFile(m.chat, url, filename, null, m)

}
handler.help = ['gitclone <url>']
handler.tags = ['downloader', 'internet']
handler.command = /gitclone/i
handler.register = true
handler.limit = true

module.exports = handler