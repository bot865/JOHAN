let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` منشن`
let oi = `*👾~الرساله:* ${pesan}`
let teks = `*منشن👾 🌸 جماعي* \n\n ${oi}\n\n*🌿┇الجروب :⇣*\n`
for (let mem of participants) {
teks += `*👾↫* @${mem.id.split('@')[0]}\n`}
teks += `*E L A K R A B BOT*\n\n*▌│█║▌║▌║║▌║▌║▌║█*`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /منشن/
handler.admin = true
handler.group = true
export default handler
