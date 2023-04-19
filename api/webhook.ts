import dotenv from "dotenv";
import { webhookCallback } from "grammy";
import { createBot } from "../src/bot";

dotenv.config();

const bot = createBot();

export default webhookCallback(bot, "http");
