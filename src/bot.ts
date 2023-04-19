import { Bot } from "grammy";

export function createBot() {
  const bot = new Bot(process.env.TELEGRAM_TOKEN ?? "");

  bot.on("message", (ctx) => {
    const name = ctx.from.first_name;
    const reply = ctx.message.text
      ? `${ctx.message.text}, ${name}`
      : "invalid message";

    ctx.reply(reply);
  });

  return bot;
}
