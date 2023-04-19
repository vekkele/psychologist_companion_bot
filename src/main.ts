import dotenv from "dotenv";
import { createBot } from "./bot";

dotenv.config();

const bot = createBot();

bot.start();
