import { BotCommand } from "grammy/types";

type Offer = BotCommand & {
  title: String;
};

type OffersMap = {
  [key: string]: Offer;
};

export const mainOffers = {
  therapy: {
    title: "Терапия",
    command: "therapy",
    description: "Личная или групповая терапия",
  },
  master_class: {
    title: "Мастер-класс",
    command: "master_class",
    description: "Master Class",
  },
} as const satisfies OffersMap;

export const commands: BotCommand[] = [
  {
    command: "start",
    description: "Начало",
  },
  ...Object.values(mainOffers),
];
