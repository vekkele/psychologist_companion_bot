import { Bot } from "grammy";

export function createBot() {
  const bot = new Bot(process.env.TELEGRAM_TOKEN ?? "");

  bot.on("message", async (ctx) => {
    const name = ctx.from.first_name;
    const reply = ctx.message.text
      ? `${ctx.message.text}, ${name}`
      : "invalid message";

    await ctx.reply(reply);
  });

  return bot;
}
