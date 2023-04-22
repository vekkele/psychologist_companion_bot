import { Composer } from "grammy";
import { createKeyboard } from "./keyboard";

const composer = new Composer();

composer.command("start", async (ctx) => {
  const name = ctx.from?.first_name;
  const text = `салам-алейкум${name ? `, ${name}` : ""}`;

  await ctx.reply(text, { reply_markup: createKeyboard() });
});

export default composer;
