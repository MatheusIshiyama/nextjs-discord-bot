import { Bot } from "../bot";
import { Message } from "discord.js";

export interface ICommand {
  name: string;
  aliases: string[];
  run: (client: Bot, message: Message, args: string[]) => Promise<void>;
}
