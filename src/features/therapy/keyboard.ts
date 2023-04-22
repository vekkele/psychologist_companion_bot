import { InlineKeyboard } from "grammy";
import { InlineKeyboardButton } from "grammy/types";

export const callbackQueries = {
  private: "therapy.private",
  group: "therapy.group",
  back: "therapy.back",
};

export const createKeyboard = () => {
  return new InlineKeyboard()
    .text("Личная", callbackQueries.private)
    .text("Групповая", callbackQueries.group);
};

export const createTherapyKeyboard = ({ isPrivateTherapy = true } = {}) => {
  const anotherTherapyButton: InlineKeyboardButton.CallbackButton =
    isPrivateTherapy
      ? { text: "Групповая терапия", callback_data: callbackQueries.group }
      : { text: "Личная терапия", callback_data: callbackQueries.private };

  return new InlineKeyboard()
    .url("Запись на терапию", process.env.PSYCHOLOGIST_URL)
    .row()
    .add(anotherTherapyButton)
    .text("Назад", callbackQueries.back);
};
