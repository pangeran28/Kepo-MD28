let handler = async (m, { conn, usedPrefix, text, isAdmin, isOwner }) => {

if (!isOwner) return m.reply('Lu Owner kah Dekkk?')
if (autoon === false) return m.reply('Auto Online udah mati Banhhh🗿🚬')
if (autoon === false) return 
autoon = false
m.reply(`Success Deactivated Mode Auto Online`)

}
handler.help = ['mati']
handler.tags = ['info', 'main']

handler.command = /^(tidur|mati)$/i

module.exports = handler
