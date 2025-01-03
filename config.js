const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_04_01_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxODAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDcxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDM1LFxuICAgICAgICA3NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjksXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjksXG4gICAgICAgIDEwLFxuICAgICAgICAxODIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDksXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDM2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTE2LFxuICAgICAgICA4MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNixcbiAgICAgICAgMjEsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDksXG4gICAgICAgIDUwLFxuICAgICAgICAxLFxuICAgICAgICA0OSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDQsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNixcbiAgICAgICAgMjQ5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTM2LFxuICAgICAgICA5MixcbiAgICAgICAgOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDQzLFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNSxcbiAgICAgICAgMjM3LFxuICAgICAgICA2OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDI2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTksXG4gICAgICAgIDE1MyxcbiAgICAgICAgODcsXG4gICAgICAgIDMxLFxuICAgICAgICAxNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEwLFxuICAgICAgICA0MCxcbiAgICAgICAgNzksXG4gICAgICAgIDEwMixcbiAgICAgICAgMjI2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3LFxuICAgICAgICA4NyxcbiAgICAgICAgMjA3LFxuICAgICAgICA3LFxuICAgICAgICAxMTksXG4gICAgICAgIDUwLFxuICAgICAgICAyMSxcbiAgICAgICAgMixcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA3NixcbiAgICAgICAgMjMxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTY2LFxuICAgICAgICAzNSxcbiAgICAgICAgMzksXG4gICAgICAgIDE5MixcbiAgICAgICAgMjA5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzLFxuICAgICAgICAxODUsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDY4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDc3LFxuICAgICAgICA2MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDY0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDI4LFxuICAgICAgICAyNixcbiAgICAgICAgMjUsXG4gICAgICAgIDM4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDQxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDg1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDczLFxuICAgICAgICA1LFxuICAgICAgICAzNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEwMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDY2LFxuICAgICAgICA0OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDc4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDgxLFxuICAgICAgICAzMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTUyLFxuICAgICAgICA3MixcbiAgICAgICAgOTcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDExLFxuICAgICAgICA5MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTM3LFxuICAgICAgICAzMSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQ3LFxuICBcImFkdlNlY3JldEtleVwiOiBcImp1cmFZT0xNcDloVy9POW9ubVFrQzdYTXpROFppSUZ6ejQ0a013VzBYb1E9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIi1ZbUNzc0d4UXVtN2FJN2ktNXBNZmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMGNkMWU2M2MtYmNjMC00MWVlLWIzNWYtOGU5Y2E4YzBjZjM1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEsXG4gICAgICAxMTcsXG4gICAgICAxODUsXG4gICAgICAxNjIsXG4gICAgICAxNDEsXG4gICAgICAyMjcsXG4gICAgICAxNjMsXG4gICAgICAxNjQsXG4gICAgICA5NixcbiAgICAgIDI0NyxcbiAgICAgIDI0MyxcbiAgICAgIDg0LFxuICAgICAgODUsXG4gICAgICAxODYsXG4gICAgICAyNTIsXG4gICAgICAyNDgsXG4gICAgICA1LFxuICAgICAgMTYzLFxuICAgICAgMTY5LFxuICAgICAgMTk2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExLFxuICAgICAgOTksXG4gICAgICAyMDcsXG4gICAgICA5MCxcbiAgICAgIDg0LFxuICAgICAgODUsXG4gICAgICA4OSxcbiAgICAgIDIwNixcbiAgICAgIDIyMyxcbiAgICAgIDMsXG4gICAgICA4MCxcbiAgICAgIDEwMSxcbiAgICAgIDMwLFxuICAgICAgNyxcbiAgICAgIDU5LFxuICAgICAgNjYsXG4gICAgICAxMzMsXG4gICAgICA5MyxcbiAgICAgIDU0LFxuICAgICAgNzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRUNSODNHM01cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2MzcxNzY3MTgyMjoxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNzc4NTU1MDk3MjEzMTQ6MTBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSnJrdHZNR0VLdnMzcnNHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJzRkRCRHd1blZSczQwVS9vZTFPU1JXUkJ0aTQ3Y0ZHeG1mOTVKSzYzZ0NJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkgyNkdCcXVCMW5iNHQrMnk4ckQrYm43STE4Qkp3YkVJOGFtTUpadjUxUWJpMllHWjFQVFVxcDR4M2dScVJNN0cza21Wc1NTdDQ0Wm5yd3ZhbS9sdkRRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImZscEhkY1JBRDd3RDNTejdvSXZJcS9pZjQ2OHdmRGtVdGVqbkhaY3FZY1ZpQmhXRGhmSkJ1Wm4rY3NyRmt6OTN5QXhxalhXcC8xTHdoSGkwRERnNmlnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2MzcxNzY3MTgyMjoxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMzRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTg5ODY3MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUYralwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRitqLmpzb24iOiAie1wia2V5RGF0YVwiOlwieGdZVlhBVTFueCtTOGxkczBBZlhzMjVnU2hiV0g4Z2hEa2E0M2hXWXVzVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODUyNjgyNzc4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzU4OTg2NzE3MzlcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
