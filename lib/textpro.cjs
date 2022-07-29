const fetch = (...args) => import('node-fetch').then(({
	default: fetch
}) => fetch(...args));
const cheerio = require("cheerio");
const cookie = require("cookie");
const FormData = require("form-data");

async function post(url, formdata = {}, cookies) {
	let encode = encodeURIComponent;
	let body = Object.keys(formdata)
		.map((key) => {
			let vals = formdata[key];
			let isArray = Array.isArray(vals);
			let keys = encode(key + (isArray ? "[]" : ""));
			if (!isArray) vals = [vals];
			let out = [];
			for (let valq of vals) out.push(keys + "=" + encode(valq));
			return out.join("&");
		})
		.join("&");
	return await fetch(`${url}?${body}`, {
		method: "GET",
		headers: {
			Accept: "*/*",
			"Accept-Language": "en-US,en;q=0.9",
			"User-Agent": "GoogleBot",
			Cookie: cookies,
		},
	});
}

/**
 * Photooxy Text Maker Scraper From https://photooxy.com
 * @function
 * @param {String} url - example https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html
 * @param {String} text - example XFar
 *
 */
exports.photooxy = async(url,text) => {
  return new Promise(async(resolve,reject) => {
    if (!/^https:\/\/photooxy\.com\/.+\.html$/.test(url)) throw new Error("Url Salah!")
        axios({url: url,
            method: 'get',
            headers: {
                'cookie': '_gid=GA1.2.1885119409.1656864706; __gads=ID=dc094aa760fdfc92-22b4a69967d30082:T=1656864706:RT=1656864706:S=ALNI_MapJhFNdgQujQ-avWct-u3snYXntQ; __gpi=UID=000006c0c6809d99:T=1656864706:RT=1656864706:S=ALNI_MbNlply1Ric98nkJqC81m4LussWaw; PHPSESSID=qasusfb11958k62t0cv3u0pim2; _gat_gtag_UA_114571019_11=1; _ga_SK0KDDQM5P=GS1.1.1656864706.1.1.1656867224.0; _ga=GA1.1.359514262.1656864706',
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36'
            }
        }).then(da => {
            const $ = cheerio.load(da.data)
            const form = new FormData()
            form.append('text[]',text)
            form.append('submit','GO')
            form.append('token',$('#token').val())
            form.append('build_server',$('#build_server').val())
            form.append('build_server_id',$('#build_server_id').val())
            axios({url: url,
                method: 'POST',
                data: form,
                headers: {
                    'cookie': '_gid=GA1.2.1885119409.1656864706; __gads=ID=dc094aa760fdfc92-22b4a69967d30082:T=1656864706:RT=1656864706:S=ALNI_MapJhFNdgQujQ-avWct-u3snYXntQ; __gpi=UID=000006c0c6809d99:T=1656864706:RT=1656864706:S=ALNI_MbNlply1Ric98nkJqC81m4LussWaw; PHPSESSID=qasusfb11958k62t0cv3u0pim2; _gat_gtag_UA_114571019_11=1; _ga_SK0KDDQM5P=GS1.1.1656864706.1.1.1656867224.0; _ga=GA1.1.359514262.1656864706',
                    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36'
                }
    }).then(da =>{
    const $ = cheerio.load(da.data)
    const p = JSON.parse($('#form_value').text().replace(/\[/g,'').replace(/\]/g,'').replace(/text/g,'text[]'))
    axios({url: 'https://photooxy.com/effect/create-image',
        method: 'POST',
        data: new URLSearchParams(p),
        headers: {
            'cookie': '_gid=GA1.2.1885119409.1656864706; __gads=ID=dc094aa760fdfc92-22b4a69967d30082:T=1656864706:RT=1656864706:S=ALNI_MapJhFNdgQujQ-avWct-u3snYXntQ; __gpi=UID=000006c0c6809d99:T=1656864706:RT=1656864706:S=ALNI_MbNlply1Ric98nkJqC81m4LussWaw; PHPSESSID=qasusfb11958k62t0cv3u0pim2; _gat_gtag_UA_114571019_11=1; _ga_SK0KDDQM5P=GS1.1.1656864706.1.1.1656867224.0; _ga=GA1.1.359514262.1656864706',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36'
        }
    }).then(a => {
        const result = {
            status: 200,
            author: author,
            result: 'https://e2.yotools.net' + a.data.image
        }
        resolve(result)
    }).catch(reject)
  }).catch(reject)
})
})
}

/**
 * Textpro  Maker Scraper From https://textpro.me
 * @function
 * @param {String} url - example https://textpro.me/create-neon-light-blackpink-logo-text-effect-online-1081.html
 * @param {String} text - example XFar
 *
 */
exports.textpro = async(url,text) => {
  return new Promise(async(resolve,reject) => {
    if (!/^https:\/\/textpro\.me\/.+\.html$/.test(url)) throw new Error("Url Salah!")
        axios({url: url,
            method: 'get',
            headers: {
                'cookie': '_ga=GA1.2.973149439.1655802326; __gads=ID=48c7bf36c499a70a-2250dc73a4d300d3:T=1655802326:RT=1655802326:S=ALNI_MZutfiaIw3EmxBoKDfSTxZMydnKrA; PHPSESSID=24eg6g44qnh7f34evgskg1ehf1; cookieconsent_status=dismiss; _gid=GA1.2.1310090408.1656776919; __gpi=UID=0000067655c41509:T=1655802326:RT=1656832156:S=ALNI_MYb5ILRvXyZT7o_Ts9jfr_e86-_8w; _gat_gtag_UA_114571019_5=1',
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36'
            }
        }).then(da => {
            const $ = cheerio.load(da.data)
            const form = new FormData()
            form.append('text[]',text)
            form.append('submit','Go')
            form.append('token',$('#token').val())
            form.append('build_server',$('#build_server').val())
            form.append('build_server_id',$('#build_server_id').val())
            axios({url: url,
                method: 'POST',
                data: form,
                headers: {
                    'cookie': '_ga=GA1.2.973149439.1655802326; __gads=ID=48c7bf36c499a70a-2250dc73a4d300d3:T=1655802326:RT=1655802326:S=ALNI_MZutfiaIw3EmxBoKDfSTxZMydnKrA; PHPSESSID=24eg6g44qnh7f34evgskg1ehf1; cookieconsent_status=dismiss; _gid=GA1.2.1310090408.1656776919; __gpi=UID=0000067655c41509:T=1655802326:RT=1656832156:S=ALNI_MYb5ILRvXyZT7o_Ts9jfr_e86-_8w; _gat_gtag_UA_114571019_5=1',
                    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36'
                }
    }).then(da =>{
    const $ = cheerio.load(da.data)
    const gdata = /<div.*?id="form_value".+>(.*?)<\/div>/.exec(da.data)
    axios({url: 'https://textpro.me/effect/create-image',
        method: 'POST',
        data: new URLSearchParams(JSON.parse(gdata[1].replace(/\[/g,'').replace(/\]/g,'').replace(/text/g,'text[]').replace(/text\[\]pro\.me/g,'textpro.me'))),
        headers: {
            'cookie': '_ga=GA1.2.973149439.1655802326; __gads=ID=48c7bf36c499a70a-2250dc73a4d300d3:T=1655802326:RT=1655802326:S=ALNI_MZutfiaIw3EmxBoKDfSTxZMydnKrA; PHPSESSID=24eg6g44qnh7f34evgskg1ehf1; cookieconsent_status=dismiss; _gid=GA1.2.1310090408.1656776919; __gpi=UID=0000067655c41509:T=1655802326:RT=1656832156:S=ALNI_MYb5ILRvXyZT7o_Ts9jfr_e86-_8w; _gat_gtag_UA_114571019_5=1',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36'
        }
    }).then(a => {
        const result = {
            status: 200,
            author: author,
            result: 'https://textpro.me' + a.data.image
        }
        resolve(result)
    }).catch(reject)
  }).catch(reject)
})
})
}

/**
 * Ephoto  Maker Scraper From https://en.ephoto360.com/
 * @function
 * @param {String} url - example https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html
 * @param {String} text - example XFar
 *
 */
exports.ephoto = async(url,text) => {
  return new Promise(async(resolve,reject) => {
        axios({url: url,
            method: 'get',
            headers: {
                'cookie': '_gid=GA1.2.1885119409.1656864706; __gads=ID=dc094aa760fdfc92-22b4a69967d30082:T=1656864706:RT=1656864706:S=ALNI_MapJhFNdgQujQ-avWct-u3snYXntQ; __gpi=UID=000006c0c6809d99:T=1656864706:RT=1656864706:S=ALNI_MbNlply1Ric98nkJqC81m4LussWaw; PHPSESSID=qasusfb11958k62t0cv3u0pim2; _gat_gtag_UA_114571019_11=1; _ga_SK0KDDQM5P=GS1.1.1656864706.1.1.1656867224.0; _ga=GA1.1.359514262.1656864706',
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36'
            }
        }).then(da => {
            const $ = cheerio.load(da.data)
            const form = new FormData()
            form.append('text[]',text)
            form.append('submit','GO')
            form.append('token',$('#token').val())
            form.append('build_server',$('#build_server').val())
            form.append('build_server_id',$('#build_server_id').val())
            axios({url: url,
                method: 'POST',
                data: form,
                headers: {
                    'cookie': '_gid=GA1.2.1885119409.1656864706; __gads=ID=dc094aa760fdfc92-22b4a69967d30082:T=1656864706:RT=1656864706:S=ALNI_MapJhFNdgQujQ-avWct-u3snYXntQ; __gpi=UID=000006c0c6809d99:T=1656864706:RT=1656864706:S=ALNI_MbNlply1Ric98nkJqC81m4LussWaw; PHPSESSID=qasusfb11958k62t0cv3u0pim2; _gat_gtag_UA_114571019_11=1; _ga_SK0KDDQM5P=GS1.1.1656864706.1.1.1656867224.0; _ga=GA1.1.359514262.1656864706',
                    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36'
                }
    }).then(da =>{
    const $ = cheerio.load(da.data)
    const p = JSON.parse($('#form_value_input').attr('value').replace(/\[/g,'').replace(/\]/g,'').replace(/text/g,'text[]'))
    console.log(p)
    axios({url: 'https://en.ephoto360.com/effect/create-image',
        method: 'POST',
        data: new URLSearchParams(p),
        headers: {
            'cookie': '_gid=GA1.2.1885119409.1656864706; __gads=ID=dc094aa760fdfc92-22b4a69967d30082:T=1656864706:RT=1656864706:S=ALNI_MapJhFNdgQujQ-avWct-u3snYXntQ; __gpi=UID=000006c0c6809d99:T=1656864706:RT=1656864706:S=ALNI_MbNlply1Ric98nkJqC81m4LussWaw; PHPSESSID=qasusfb11958k62t0cv3u0pim2; _gat_gtag_UA_114571019_11=1; _ga_SK0KDDQM5P=GS1.1.1656864706.1.1.1656867224.0; _ga=GA1.1.359514262.1656864706',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36'
        }
    }).then(a => {
        const result = {
            status: 200,
            author: author,
            result: 'https://e2.yotools.net' + a.data.image
        }
        resolve(result)
    }).catch(reject)
  }).catch(reject)
})
})
}
module.exports = { textpro, ephoto, photooxy }
