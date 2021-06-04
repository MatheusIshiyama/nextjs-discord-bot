import { Bot } from "../bot";

export interface IEvent {
  name: string;
  run: (client: Bot, args: string[]) => Promise<void>;
}
