let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`${pickRandom(global.cantik)}`, m)
}
handler.help = ['cantikcek']
handler.tags = ['fun']
handler.command = /^(cantikcek|cekcantik)$/i

handler.limit = true

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.cantik = [
'Cantik Level : 4%\n\nINI MUKA ATAU SAMPAH?!',
'Cantik Level : 7%\n\nSerius ya Bro,, Lu ampir mirip kayak Monyet!',
'Cantik Level : 12%\n\nMakin lama liat muka lo gw bisa muntah!',
'Cantik Level : 22%\n\nMungkin karna lo sering berbuat maksiat😂',
'Cantik Level : 27%\n\nKeknya bakal susah dapet jodoh lu,, berdoa aja',
'Cantik Level : 35%\n\nYang sabar ya ayang',
'Cantik Level : 41%\n\nSemoga diberkati mendapat jodohnya',
'Cantik Level : 48%\n\nDijamin cowok susah deketin lo',
'Cantik Level : 56%\n\nLu Setengah Cantik :v',
'Cantik Level : 64%\n\nCukuplah',
'Cantik Level : 71%\n\nLumayan Cantik Juga Lu Ya',
'Cantik Level : 2%\n\nAWOAKAK BURIQQQ!!!',
'Cantik Level : 1%\n\nAWOAKAK BURIQQQ!!!',
'Cantik Level : 3%\n\nAWOAKAK BURIQQQ!!!',
'Cantik Level : 1%\n\nAWOAKAK BURIQQQ!!!',
'Cantik Level : 77%\n\nGak akan Salah Lagi dah Tante',
'Cantik Level : 83%\n\nDijamin Cowok gak akan Kecewa Tante',
'Cantik Level : 89%\n\nCowok2 pasti bakalan pingsan klo ngeliat lo!',
'Cantik Level : 94%\n\nAARRGGHHH TANTE!!!',
'Cantik Level : 100%\n\nLU EMANG CEWE TERCANTIK YANG PERNAH GW LIAT!!!',
]
