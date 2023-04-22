import { Bot } from "grammy";
import { description } from "./constants/strings";
import start from "./features/start";
import therapy from "./features/therapy";
import { commands } from "./constants/commands";

export function createBot() {
  const bot = new Bot(process.env.TELEGRAM_TOKEN ?? "");

  bot.api.setMyDescription(description);

  bot.use(start);
  bot.use(therapy);

  bot.api.setMyCommands(commands);

  return bot;
}
