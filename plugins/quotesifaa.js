let fs = require('fs')
let handler  = async (m, { conn, usedPrefix, command }) => {
   let anu = ` ────〔 *Ifa & Koko* 〕────

${pickRandom(global.ifaa)}
`
conn.sendButton(m.chat, anu, wm, `Quotes Ifaa`, `${usedPrefix + command}`, m)
}
handler.help = ['ifaa']
handler.tags = ['quotes']
handler.command = /^(ifaa)$/i
handler.limit = true
handler.register = true
module.exports = handler

function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())]
}

global.ifaa = [
"_Dia sudah pergi, tapi saya masih terkurung dalam masalalu nya._\n\n*©Faaa*",
"_Sedang belajar untuk kuat, karena dunia bercandanya mulai berlebihan._\n\n*©Faaa*",
"_Aku benci ketika aku tidak sengaja mengetahui sesuatu yang seharusnya tidak aku ketahui._\n\n*©Faaa*",
"_Sedang di tahap, sudah mulai pasrah biar Tuhan saja yang atur bagaimana baiknya._\n\n*©Faaa*",
"_Saya bisa melupakan anda, namun anda selalu ada didalam pikiran ku stiap saat._\n\n*©Faaa*",
"_Hidup berantakan bisa di setrika ga sih biar mulus lagi._\n\n*©Faaa*",
"_Males ngomongin isu terkini, tapi ada satu isu yang aku suka yaitu is u._\n\n*©Faaa*",
"_Sekali-kali publish, selain bikin orang lain tau itu juga bisa bikin dirinya senang._\n\n*©Faaa*",
"_Lu berhak nge block instagram, ngedelete nomor, remove followers orang orang yang buat lu sedih, yang ngerusak kebahagiaan lu, lakuin buat diri lu sendiri, dan itu bukan suatu hal yang childish kok._\n\n*©Faaa*",
"_Sibuklah bersyukur sampai lupa caranya mengeluh, jangan sibuk mengeluh sampai lupa cara bersyukur._\n\n*©KokoPangeran*",
"_Nek ra ayu yo ojo gwo ftone wong toh mba apa ndk malu?_\n\n*©Faaa*",
"_Banyak hal yang membuat kita tau bahwa dunia itu sangat lah indah diluar bukan didalam._\n\n*©Faaa*",
"_Dirimu yang membuatku berubah dari hal yang dulu sering ku lakukan._\n\n*©Faaa*",
"_Makasih atas apa yang kamu telah berikan kepadaku dan membuatku berubah menjadi orang baik._\n\n*©Faaa*",
"*Tidurku, makanku, sifatku semua telah kau ubah dengan caramu sendiri tanpa harus mencopas orang lain untuk menjadikan ku orang yang bisa melupakan hal hal yang dulu sering kulakukan._\n\n*©Faaa*",
"_Semua akan indah jika kamu selalu bersamaku._\n\n*©Faaa*",
"_Aku akan mengubah diriku yang dulu jika nanti kamu pergi dari diriku._\n\n*©Faaa*",
"_Hanya melihat tanpa menyapa, hanya memandang tanpa berkata._\n\n*©KokoPangeran*",
"_Mengagumi sosokmu lebih dari cukup, karna mendapatkan sosokmu tidak lah mudah._\n\n*©Faaa*",
"_Hanya bisa menggagumi, soal memiliki aku sadar diri._\n\n*©Faaa*",
"_Akhirnya aku merasakan kembali apa yang pernah dulu aku rasakan._\n\n*©Faaa*",
"_Hanya saja aku bersabar menunggu sosokmu, walaupun kamu sudah bisa melupakan ku._\n\n*©Faaa*",
"_Ajari aku untuk melupakanmu, seperti dirimu melupakan ku._\n\n*©KokoPangeran*",
"_Ga perlu kata kata banh, wanita hanya perlu bukti nyata!_\n\n*©KokoPangeran*",
"_Diawali dengan percaya diri, diakhir dengan sadar diri._\n\n*©KokoPangeran*",
"_Jangan buang waktumu untuk seseorang yang tidak mengharapkan mu._\n\n*©KokoPangeran*",
"_Jika dia benar-benar mencintaimu, dia tidak akan pernah meninggalkanmu dengan alasan yang begitu susah dipercaya._\n\n*©KokoPangeran*",
"_Tidurlah, gadang mu tidak akan membuat dirinya kembali kepadamu._\n\n*©KokoPangeran*",
"_Jika aku pergi, maka berjanji lah kepadaku, jangan pernah dirimu menyakiti laki-laki lain dengan kepuasanmu atau egomu._\n\n*©KokoPangeran*",
"_Hadirku bisa selamanya dan bisa juga sementara, jadi jangan pernah menyia"kan orang lain demi kebahagiaan mu._\n\n*©KokoPangeran*",
"_Aku takut dicintai karena nafsu, bukan karena sayang._\n\n*©Faaa*",
"_Mungkin bukan takdirnya kita bersam, namun ga ada yang ga mungkin untuk kita selalu bersama._\n\n*©KokoPangeran*",
"_Kamu cantik utama kan bersyukur ya cantik sama-sama ciptaan Tuhan hrus bersyukur bukan insecure._\n\n*©Faaa*"
]
