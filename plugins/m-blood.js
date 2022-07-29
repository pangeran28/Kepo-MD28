var tp = require("../lib/textpro.cjs")
let handler = async (m, {
	conn,
	args
}) => {
	let txt = args.join` `
	if (!txt) return conn.reply(m.chat, 'harap masukan teksnya!!!', m)
	if (txt.length > 15) return conn.reply(m.chat, 'maksimal 15', m)
	var a = await tp("https://textpro.me/blood-text-on-the-frosted-glass-941.html", txt)
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
		m.reply("*Tunggu sebentar*\n_Lagi dientod..._")
		conn.sendFile(m.chat, buffer.data, "", "_Nih Sayang💦_\n\n_*Follow IG OwnerKu Tante:*_\nhttps://instagram.com/kokopangeran_", false)
	} catch (e) {
		if (e.response) {
			console.log(e.response.statusText)
			throw "emror bruh"
		}
	}
}
handler.help = ['blood [text]']
handler.tags = ['maker', 'textpro']
handler.command = /^blood$/i
handler.limit = true

module.exports = handler
