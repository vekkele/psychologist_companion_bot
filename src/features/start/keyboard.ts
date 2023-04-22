import { InlineKeyboard } from "grammy";
import { mainOffers } from "../../constants/commands";
import { InlineKeyboardButton } from "grammy/types";

export const createKeyboard = () => {
  const buttons = Object.values(mainOffers).map<
    InlineKeyboardButton.CallbackButton[]
  >((offer) => [
    {
      text: offer.title,
      callback_data: offer.command,
    },
  ]);

  return new InlineKeyboard(buttons);
};
