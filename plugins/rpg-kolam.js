let handler = async (m, { conn, usedPrefix }) => {
         let paus = global.db.data.users[m.sender].paus 
         let kepiting = global.db.data.users[m.sender].kepiting
         let gurita = global.db.data.users[m.sender].gurita 
         let cumi = global.db.data.users[m.sender].cumi 
         let buntal = global.db.data.users[m.sender].buntal 
         let dory = global.db.data.users[m.sender].dory 
         let lumba = global.db.data.users[m.sender].lumba 
         let lobster = global.db.data.users[m.sender].lobster 
         let hiu = global.db.data.users[m.sender].hiu 
         let udang = global.db.data.users[m.sender].udang
         let ikan = global.db.data.users[m.sender].ikan 
         let orca = global.db.data.users[m.sender].orca 
         let lastfishing = global.db.data.users[m.sender].lastfishing
         let _pancingan = global.db.data.users[m.sender].anakpancingan 
         let aineh = `
*Fish Pond*
Hiu: ${hiu}
Ikan: ${ikan}
Dory: ${dory}
Orca: ${orca}
Paus: ${paus}
Cumi: ${cumi}
Gurita: ${gurita}
Buntal: ${buntal}
Udang: ${udang}
Lumba²: ${lumba}
Lobster: ${lobster}
Kepiting: ${kepiting}
*Level Pancingan:*
Pancingan: *${lastfishing == 0 ? 'Tidak Punya' : '' || lastfishing == 1 ? 'Level 1' : '' || lastfishing == 2 ? 'Level 2' : '' || lastfishing == 3 ? 'Level 3' : '' || lastfishing == 4 ? 'Level 4' : '' || lastfishing == 5 ? 'Level MAX' : ''}*
╭────────────────
│Lastfishing ${lastfishing == 0 ? 'Tidak Punya' : '' || lastfishing > 0 && lastfishing < 5 ? `Level *${lastfishing}* To level *${lastfishing + 1}*\n│Exp *${_pancingan}* -> *${lastfishing *10000}*` : '' || lastfishing == 5 ? '*Max Level*' : ''}
╰────────────────
`.trim()

conn.reply(m.chat, aineh, m)
}

handler.help = ['kolam']
handler.tags = ['rpg']
handler.command = /^(kolam)$/i
handler.limit = false
handler.group = true
module.exports = handler
