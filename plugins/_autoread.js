let handler = async (m, { conn, usedPrefix, text, isAdmin, isOwner }) => {

if (!isOwner) return m.reply('Lu Owner kah Dekkk?')
if (autoread === true) return m.reply('Auto Read udah Aktif Banh🗿🚬')
//if (autovn === true) return 
autoread = true
m.reply(`Success Activated Mode Auto Read`)

}
handler.help = ['onread']
handler.tags = ['info', 'main']

handler.command = /^(onr|onread)$/i

module.exports = handler
