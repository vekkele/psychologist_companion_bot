import { Composer, Context } from "grammy";
import {
  callbackQueries,
  createKeyboard,
  createTherapyKeyboard,
} from "./keyboard";
import { groupTherapyText, privateTherapyText, therapyText } from "./strings";
import { mainOffers } from "../../constants/commands";

const composer = new Composer();
const therapyOffer = mainOffers.therapy;

const handleCommand = async (ctx: Context) => {
  await ctx.reply(therapyText, { reply_markup: createKeyboard() });
};

composer.callbackQuery(therapyOffer.command, handleCommand);
composer.command(therapyOffer.command, handleCommand);

composer.callbackQuery(callbackQueries.private, async (ctx) => {
  await ctx.editMessageText(privateTherapyText, {
    reply_markup: createTherapyKeyboard(),
  });
});

composer.callbackQuery(callbackQueries.group, async (ctx) => {
  await ctx.editMessageText(groupTherapyText, {
    reply_markup: createTherapyKeyboard({ isPrivateTherapy: false }),
  });
});

composer.callbackQuery(callbackQueries.back, async (ctx) => {
  await ctx.editMessageText(therapyText, {
    reply_markup: createKeyboard(),
  });
});

export default composer;
