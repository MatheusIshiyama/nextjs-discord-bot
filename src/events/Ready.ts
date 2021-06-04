import { Bot } from "../bot";

export const run = async (client: Bot) => {
  client.logger(`[Bot] ${client.user.tag} is now ready!`);
};

export const name: string = "ready";
