let handler = async (m, { conn, args, usedPrefix, command }) => {
let isClose = { // Switch Case Like :v
'open': 'not_announcement',
'close': 'announcement',
'فتح': 'not_announcement',
'غلق': 'announcement',
'on': 'not_announcement',
'off': 'announcement',
}[(args[0] || '')]
if (isClose === undefined)
throw `
*انت كتبت الامر غلط شوف الصح 👇🏻♥*

*┏━━━❲ 🤍 مـــثـال 🤍 ❳━━━┓* 
*┠┉↯ ${usedPrefix + command} فتح*
*┠┉↯ ${usedPrefix + command} غلق*
`.trim()
await conn.groupSettingUpdate(m.chat, isClose)
{m.reply('*[ 🇵🇸 ] تم تغير اعدادات الجروب بنجاح*')}
}
handler.help = ['group open / close', 'جروب فتح / غلق']
handler.tags = ['group']
handler.command = (/g$/i) 
handler.admin = true
handler.botAdmin = true
export default handler
