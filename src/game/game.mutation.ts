import {
  Game,
  MutationAddGameArgs,
  MutationDeleteGameArgs,
  MutationUpdateGameArgs,
} from "../__generated__/resolvers-types";
import db from "../_db";

export const gameMutation = {
  async addGame(_: any, args: MutationAddGameArgs): Promise<Game> {
    const game = {
      id: Date.now().toString(),
      ...args.game,
    };
    db.games.push(game);
    return game;
  },
  async updateGame(_: {}, args: MutationUpdateGameArgs): Promise<Game> {
    const game = db.games.map((e) => {
      if (e.id == args.id) {
        return { ...e, ...args.game };
      }
      return e;
    });
    return game.find((e) => e.id === args.id);
  },
  async deleteGame(_: {}, args: MutationDeleteGameArgs): Promise<Array<Game>> {
    db.games = db.games.filter((e) => e.id !== args.id);
    return db.games;
  },
};
