var tp = require("../lib/textpro.cjs")
let handler = async (m, {
	conn,
	args
}) => {
	let txt = args.join` `
	if (!txt) return conn.reply(m.chat, 'harap masukan teksnya!!!', m)
	if (txt.length > 15) return conn.reply(m.chat, 'maksimal 15', m)
	var a = await tp("https://textpro.me/deluxe-silver-text-effect-970.html", txt)
	console.log(a)
	try {
		var buffer = await axios.request(a, {
			method: "GET",
			responseType: "arraybuffer",
			headers: {
				"user-agent": "GoogleBot"
			}
		})
		console.log(buffer.status)
		m.reply("tunggu sebentar")
		conn.sendFile(m.chat, buffer.data, "", "_Nih Sayang💦_\n\n_*Follow IG OwnerKu Tante:*_\nhttps://instagram.com/kokopangeran_", false)
	} catch (e) {
		if (e.response) {
			console.log(e.response.statusText)
			throw "emror bruh"
		}
	}
}
handler.help = ['deluxe [text]']
handler.tags = ['maker', 'textpro']
handler.command = /^deluxe$/i
handler.limit = true

module.exports = handler
