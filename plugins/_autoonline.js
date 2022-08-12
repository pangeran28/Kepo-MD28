let handler = async (m, { conn, usedPrefix, text, isAdmin, isOwner }) => {

if (!isOwner) return m.reply('Lu Owner kah Dekkk?')
if (autoon === true) return m.reply('Auto Online udah Aktif Banhhh,🗿🚬')
if (autoon === true) return 
autoon = true
m.reply(`Success Activated Mode Auto Online`)
 
}
handler.help = ['hidup']
handler.tags = ['info', 'main']

handler.command = /^(hidup|bangun)$/i

module.exports = handler
