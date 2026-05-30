const { Telegraf } = require("telegraf");
const path = require("path");

const BOT_TOKEN = "8835763764:AAFqHcCeQyzLaz1MUZ9tZrb6DPftZ4wbNck";

const bot = new Telegraf(BOT_TOKEN);

// Start
bot.start((ctx) => {
ctx.reply(
🎮 Welcome to Fun Game Bot!

Available Commands:
• /dihh
• /chumma (reply to a user)
• /haath (reply to a user)
);
});

// /dihh
bot.command("dihh", async (ctx) => {
const size = Math.floor(Math.random() * 9) + 1;

let text =
size < 5
? "📏 Your Dihh is ${size} inches long.\n👶 Bade hojao baccha!"
: "📏 Your Dihh is ${size} inches long.\n😎 Oh Yeah!";

await ctx.reply(text);
});

// /chumma
bot.command("chumma", async (ctx) => {
const reply = ctx.message.reply_to_message;

if (!reply) {
return ctx.reply("⚠️ Kisi message par reply karke /chumma use karo.");
}

const sender = ctx.from.first_name;
const target = reply.from.first_name;

await ctx.replyWithPhoto(
{
source: path.join(__dirname, "chumma.jfif")
},
{
caption:
💋 CHUMMA ATTACK 💋

❤️ ${sender} ne ${target} ko chumma diya!

🙈 Hawwwww... Group ke saamne hi!
}
);
});

// /haath
bot.command("mutthi", async (ctx) => {
const reply = ctx.message.reply_to_message;

if (!reply) {
return ctx.reply("⚠️ Kisi message par reply karke /mutthi use karo.");
}

const sender = ctx.from.first_name;
const target = reply.from.first_name;

await ctx.replyWithPhoto(
{
source: path.join(__dirname, "haath.jfif")
},
{
caption:
👑 RAJA JI SPECIAL 👑

🤚${sender} ne ${target} par mutthi maarke nehla diya🥵!

 Kya hi scene chal raha hai bhai!
}
);
});

bot.launch();

console.log("✅ Bot Started");
