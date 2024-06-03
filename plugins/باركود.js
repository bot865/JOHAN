import { toDataURL } from 'qrcode'
let handler = async (m, { text, conn }) => {
if (!text) throw `*حط الحاجه الي عايز تحولها كود*`
conn.sendFile(m.chat, await toDataURL(text.slice(0, 2048), { scale: 8 }), 'qrcode.png', '¯\\_(اتفضل🧸🤍', m)
}
handler.help = ['✓ ◡̈⃝ ✓│باركود🧸💜']
handler.tags = ['game']
handler.command = /^qr(code)?|كود|باركود$/i
export default handler
