import { Client, Collection } from "discord.js";
import { ICommand, IEvent } from "../interfaces";
import CommandFiles from "../commands";
import EventFiles from "../events";

export class Bot extends Client {
  public commands: Collection<string, ICommand> = new Collection();
  public events: Collection<string, IEvent> = new Collection();

  public logger(message: string) {
    console.log(message);
  }

  public async start(token: string) {
    this.login(token);

    CommandFiles.forEach((commandFile) => {
      this.commands.set(commandFile.name, commandFile);
    });

    EventFiles.forEach((eventFile) => {
      this.events.set(eventFile.name, eventFile);
      this.on(eventFile.name, eventFile.run.bind(null, this));
    });
  }
}

export default new Bot();
