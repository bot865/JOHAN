import { unlinkSync, readFileSync } from 'fs'
import { join } from 'path'
import { exec } from 'child_process'

let handler = async (m, { conn, args, __dirname, usedPrefix, command }) => {
try {
let q = m.quoted ? m.quoted : m
let mime = ((m.quoted ? m.quoted : m.msg).mimetype || '')
let set
if (/عميق/.test(command)) set = '-af equalizer=f=94:width_type=o:width=2:g=30'
if (/منفوخ/.test(command)) set = '-af acrusher=.1:1:64:0:log'
if (/تخين/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
if (/صاخب/.test(command)) set = '-af volume=12'
if (/سريع/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
if (/تخينن/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
if (/رفيع/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
if (/تقطيع/.test(command)) set = '-filter_complex "areverse"'
if (/روبوت/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
if (/بطيء/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
if (/ناعم/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
if (/سنجاب/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
if (/audio/.test(mime)) {
let ran = getRandom('.mp3')
let filename = join(__dirname, '../tmp/' + ran)
let media = await q.download(true)
exec(`ffmpeg -i ${media} ${set} ${filename}`, async (err, stderr, stdout) => {
await unlinkSync(media)
if (err) throw `Error`
let buff = await readFileSync(filename)
conn.sendFile(m.chat, buff, ran, null, m, true, {
type: 'audioMessage', 
ptt: true 
})})
} else throw `*رد على الصوت الذي تريد تحويله، استخدم الامر التالي ${usedPrefix + command}*`
} catch (e) {
throw e
}}
handler.help = ['✓ ◡̈⃝ ✓│صاخب🔊💫', '✓ ◡̈⃝ ✓│رفيع🔊💫', '✓ ◡̈⃝ ✓│منفوخ🔊💫', '✓ ◡̈⃝ ✓│بطيء🔊💫', '✓ ◡̈⃝ ✓│ناعم🔊💫', '✓ ◡̈⃝ ✓│روبوت🔊💫', '✓ ◡̈⃝ ✓│سنجاب🔊💫', '✓ ◡̈⃝ ✓│عميق🔊💫']
handler.tags = ['audio-changer']
handler.command = /^(عميق|منفوخ|تخين|صاخب|سريع|تخينن|رفيع|روبوت|بطيء|ناعم|سنجاب)$/i
export default handler

const getRandom = (ext) => {
return `${Math.floor(Math.random() * 10000)}${ext}`}
