let handler = async (m, { conn }) => {	
await conn.fetchBlocklist().then(async data => {
let txt = `*≡ قائمة المحظورين من البوت*\n\n*المجموع :* ${data.length}\n\n┌─⊷\n`
for (let i of data) {
txt += `▢ @${i.split("@")[0]}\n`}
txt += "└───────────"
return conn.reply(m.chat, txt, m, { mentions: await conn.parseMention(txt) })
}).catch(err => {
console.log(err);
throw 'لا أرقام محظورة'})}
handler.help = ['✓ ◡̈⃝ ✓│البلوكات🧸💜']
handler.tags = ['group']
handler.command = ['blocklist', 'البلوكات'] 
handler.rowner = true
export default handler
