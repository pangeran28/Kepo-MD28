let axios = require("axios");
let handler = async(m, { conn, text }) => {

    //if (!text) return conn.reply(m.chat, 'Masukan parameter, Contoh *#lirik my love*', m)

  await m.reply('Sedang di proses kak:b')
	axios.get(`https://api-xcoders.xyz/api/random/cersex?apikey=xcoders`).then ((res) => {
	 	let hasil = `~> *Judul* : ${res.data.result.title}\n\n _${res.data.result.cerita}_`

    conn.sendFile(m.chat, res.data.result.thumbnail, 'carsex.jpeg', hasil, m)
	})
}
handler.help = ['cersex']
handler.tags = ['internet']
handler.command = /^cersex$/i
handler.limit = true
handler.register = true

module.exports = handler
