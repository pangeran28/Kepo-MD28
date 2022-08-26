let handler = m => m

handler.before = async function (m) {
   if (m.sender.startsWith('212' || '212')) {
   	global.db.data.users[m.sender].banned = true
conn.reply('Awkawk Orang Asin :l')
this.groupParticipantsUpdate(m.chat, [m.sender], "remove")
this.updateBlockStatus(m.sender, 'block')
   }
   
   if (m.sender.startsWith('92' || '92')) {
   	global.db.data.users[m.sender].banned = true
conn.reply('Awkawk Orang Asin :l')
this.groupParticipantsUpdate(m.chat, [m.sender], "remove")
this.updateBlockStatus(m.sender, 'block')
   }

   if (m.sender.startsWith('1' || '1')) {
   	global.db.data.users[m.sender].banned = true
conn.reply('Awkawk Orang Asin :l')
this.groupParticipantsUpdate(m.chat, [m.sender], "remove")
this.updateBlockStatus(m.sender, 'block')
   }

   if (m.sender.startsWith('91' || '91')) {
   	global.db.data.users[m.sender].banned = true
conn.reply('Awkawk Orang Asin :l')
this.groupParticipantsUpdate(m.chat, [m.sender], "remove")
this.updateBlockStatus(m.sender, 'block')
   }

   if (m.sender.startsWith('90' || '90')) {
   	global.db.data.users[m.sender].banned = true
conn.reply('Awkawk Orang Asin :l')
this.groupParticipantsUpdate(m.chat, [m.sender], "remove")
this.updateBlockStatus(m.sender, 'block')
   }

   if (m.sender.startsWith('7' || '7')) {
   	global.db.data.users[m.sender].banned = true
conn.reply('Awkawk Orang Asin :l')
this.groupParticipantsUpdate(m.chat, [m.sender], "remove")
this.updateBlockStatus(m.sender, 'block')
   }
    }

module.exports = handler



/*let handler = m => m

export async function before(m, { isAdmin, isBotAdmin }) {
   if (m.sender.startsWith('212' || '212')) {
   	global.db.data.users[m.sender].banned = true
conn.reply('Awkawk Orang Asin :l')
conn.groupParticipantsUpdate(m.chat, [user], "remove")
   }
   
   if (m.sender.startsWith('265' || '265')) {
   	global.db.data.users[m.sender].banned = true
conn.reply('Awkawk Orang Asin :l')
conn.groupParticipantsUpdate(m.chat, [user], "remove")
   } 
   
   if (m.sender.startsWith('92' || '92')) {
   	global.db.data.users[m.sender].banned = true
conn.reply('Awkawk Orang Asin :l')
conn.groupParticipantsUpdate(m.chat, [user], "remove")
   } 
   
   if (m.sender.startsWith('90' || '90')) {
   	global.db.data.users[m.sender].banned = true
conn.reply('Awkawk Orang Asin :l')
conn.groupParticipantsUpdate(m.chat, [user], "remove")
   } 
  }
return true
}

module.exports = handler*/
