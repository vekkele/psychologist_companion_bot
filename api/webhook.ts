import { webhookCallback } from "grammy";
import { createBot } from "../src/bot";
import "./env";

const bot = createBot();

export default webhookCallback(bot, "http");
