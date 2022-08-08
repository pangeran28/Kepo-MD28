let handler = async(m, { conn }) => {
  m.reply('Kenapa SayangKuuuu😚')
}
handler.customPrefix= /^(k?o|ko?ko|pang?eran|bo?t)$/i
handler.command = new RegExp

module.exports = handler
