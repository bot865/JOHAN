let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
m.reply(`*${toM(a)}, طلاقها بالتلته لو عندك دم 😂*
*${toM(b)},*متزعليش🥺\n\*اجوزك سيد سيدو*`, null, {
mentions: [a, b]
})}
handler.help = ['✓ ◡̈⃝ ✓│طلاق🧸💜']
handler.tags = ['game']
handler.command = ['الطلاق','طلاق']
handler.group = true
export default handler
