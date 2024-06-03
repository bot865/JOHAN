import axios from "axios"
let handler = async (m, {command, conn, usedPrefix}) => {
let res = (await axios.get(`https://raw.githubusercontent.com/socona12/test/main/5lfya`)).data  
let haha = await res[Math.floor(res.length * Math.random())]    
conn.sendFile(m.chat, haha, 'error.jpg', ``, m)
}
 handler.help = ['✓ ◡̈⃝ ✓│خلفيه🧸💜']
 handler.tags = ['anime']
 handler.command =['خلفيه']
export default handler
