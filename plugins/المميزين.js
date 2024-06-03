
let handler = async (m, { conn, args, usedPrefix, command }) => {
let prem = global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid) 
let teks = `▢ *المستخدمين البريميوم*\n─────────────\n` + prem.map(v => '❈↲ @' + v.replace(/@.+/, '')).join`\n`
m.reply(teks, null, {mentions: conn.parseMention(teks)})

}
handler.help = ['✓ ◡̈⃝ ✓│البريميوم🧸💜']
handler.tags = ['group']
handler.command = ['listprem', 'المميزين', 'البريميوم'] 

export default handler
