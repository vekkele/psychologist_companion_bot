import { z } from "zod";
import dotenv from "dotenv";

dotenv.config();

const env = z.object({
  TELEGRAM_TOKEN: z.string(),
});

env.parse(process.env);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof env> {}
  }
}
