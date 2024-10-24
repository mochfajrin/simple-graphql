import { Game, QueryGameArgs } from "../__generated__/resolvers-types";
import _db from "../_db";

export const gameQuery = {
  async games(_: {}, args: {}): Promise<Array<Game>> {
    return _db.games;
  },
  async game(_: {}, args: QueryGameArgs): Promise<Game> {
    return _db.games.find((game) => game.id === args.id);
  },
};
