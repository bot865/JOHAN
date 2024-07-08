import { toDataURL } from 'qrcode'
let handler = async (m, { text, conn }) => {
if (!text) throw `*حط الحاجه الي عايز تحولها كود*`
conn.sendFile(m.chat, await toDataURL(text.slice(0, 2048), { scale: 8 }), 'qrcode.png', '¯\\_(BY:˛ َِ𝗘َِ𝗟َِ𝗔َِ𝗞َِ𝗥َِ𝗔َِ𝗕 َِ𝗘َِ𝗟َِ𝗬َِ𝗢َِ𝗧َِ𝗨َِ𝗕َِ𝗘َِ𝗥 .', m)
}
handler.help = ['', 'code'].map(v => 'qr' + v + ' <teks>')
handler.tags = ['tools']
handler.command = /^qr(code)?|كود|باركود$/i
export default handler
