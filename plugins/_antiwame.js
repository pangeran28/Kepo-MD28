let handler = m => m

let linkRegex = /wa.me\/([0-9A-Za-z]{20,24})/i
handler.before = async function (m, { isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.db.data.chats[m.chat]
  let isWameLink = linkRegex.exec(m.text)

  if (chat.antiLink && isWameLink && !isAdmin && !m.isBaileys && m.isGroup) {
    let thisWame = `https://wa.me/${await this.groupInviteCode(m.chat)}`
    if (m.text.includes(thisWame)) throw false // jika link grup itu sendiri gak dikick
      if (!isBotAdmin) m.reply(` *「 ANTI WA ME 」* ${isAdmin ? "Admin mah bebas ygy :v" : `\n\nlink group terdeteksi dan ${global.namabot} bukan admin jadi tidak bisa ngekick!`}`)
    if (isBotAdmin) {
      m.reply(` *「 ANTI WA MR 」* \n\nLink Wa Me Terdeteksi, bye Kamu Akan Di Kick!!`.trim())
      await this.delay(500)
      await this.groupParticipantsUpdate(m.chat, [m.sender], "remove")
    }
  }
  return true
}

module.exports = handler
