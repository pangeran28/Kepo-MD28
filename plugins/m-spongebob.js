const uploadFile = require('../lib/uploadFile.js')
let { webp2png } = require('../lib/webp2mp4.js')
let handler = async(m, { conn, text, usedPrefix, command }) => {
	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || q.mediaType || ''

	if (/webp|image/g.test(mime)) {
		let img = await q.download?.()
		if (!img) throw `balas gambar/stiker dengan perintah ${usedPrefix + command}`
		try {
			let out
			if (/image/g.test(mime)) out = await uploadFile(img)
			if ('image/webp'.includes(mime)) out = await webp2png(img)
			let a = (await axios.get(API('beni', 'api/canvas/spongebob', {
				image: out
			}), {
				responseType: 'arraybuffer'
			})).data
			conn.sendFile(m.chat, a, '', 'nih bang', m)
		} catch (e) {
			if (e.response) {
				log(e.response.statusText)
				throw 'server error'
			} else {
				throw 'ada yang gak beres nih'
			}
		}
	}
}
handler.help = ['spongebob']
handler.tags = ['maker']
handler.command = /^spongebob$/i
module.exports = handler
