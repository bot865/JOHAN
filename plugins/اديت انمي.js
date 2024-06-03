let handler = async (m, { conn, usedPrefix, command }) => {
  await conn.sendMessage(m.chat, {
   react: {
 text: "🧸",
 key: m.key,
   }
  })

  await conn.sendMessage(m.chat, { audio: { url: dir[Math.floor(Math.random() * dir.length)] }, caption: global.veeeee }, { quoted: m })
}

handler.help = ['اديت-انمي']
handler.tags = ['anime']
handler.command = /^(اديت-انمي)$/i
handler.limit = false

export default handler

const dir = [
'https://files.catbox.moe/r7a93j.wav',
'https://files.catbox.moe/r7a93j.wav',
'https://files.catbox.moe/r7a93j.wav',
'https://files.catbox.moe/r7a93j.wav',
'https://files.catbox.moe/r7a93j.wav',
'https://files.catbox.moe/r7a93j.wav',
'https://files.catbox.moe/r7a93j.wav',
'https://files.catbox.moe/r7a93j.wav',
'https://files.catbox.moe/r7a93j.wav',
'https://files.catbox.moe/r7a93j.wav',
'https://files.catbox.moe/r7a93j.wav',
'https://files.catbox.moe/r7a93j.wav',
'https://files.catbox.moe/r7a93j.wav',



'',
]
