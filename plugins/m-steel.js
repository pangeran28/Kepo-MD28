var tp = require("../lib/textpro.js")
let handler = async (m, {
	conn,
	args
}) => {
	let txt = args.join` `
	if (!txt) return conn.reply(m.chat, 'harap masukan teksnya!!!', m)
	if (txt.length > 15) return conn.reply(m.chat, 'maksimal 15', m)
	let items = ["https://textpro.me/pink-sparkling-jewelry-text-effect-899.html","https://textpro.me/blue-sparkling-jewelry-text-effect-898.html","https://textpro.me/green-sparkling-jewelry-text-effect-897.html","https://textpro.me/purple-sparkling-jewelry-text-effect-896.html","https://textpro.me/gold-sparkling-jewelry-text-effect-895.html","https://textpro.me/red-sparkling-jewelry-text-effect-894.html","https://textpro.me/cyan-sparkling-jewelry-text-effect-893.html","https://textpro.me/3d-luxury-gold-text-effect-online-1003.html","https://textpro.me/peridot-stone-text-effect-916.html"];
    let cewe = items[Math.floor(Math.random() * items.length)]
	var a = await tp(cewe, txt)
	log(a)
	try {
		var buffer = await axios.request(a, {
			method: "GET",
			responseType: "arraybuffer",
			headers: {
				"user-agent": "GoogleBot"
			}
		})
		log(buffer.status)
		m.reply("tunggu sebentar")
		conn.sendFile(m.chat, buffer.data, "", "_Nih Sayang💦_\n\n_*Follow IG OwnerKu Tante:*_\nhttps://instagram.com/kokopangeran_", false)
	} catch (e) {
		if (e.response) {
			console.log(e.response.statusText)
			throw "emror bruh"
		}
	}
}
handler.help = ['steel [text]']
handler.tags = ['maker']
handler.command = /^steel$/i
handler.limit = true

module.exports = handler
