let handler = async (m, { conn, usedPrefix, text, isAdmin, isOwner }) => {

if (!isOwner) return m.reply('Lu Owner kah Dekkk?')
if (autoread === false) return m.reply('Auto Read udah Mati Banh🗿🚬')
//if (autovn === true) return 
autoread = false
m.reply(`Success Deactivated Mode Auto Read`)

}
handler.help = ['offread']
handler.tags = ['info', 'main']

handler.command = /^(offr|offread)$/i

module.exports = handler
