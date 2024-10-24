import { Resolvers } from "./__generated__/resolvers-types.js";
import { gameMutation } from "./game/game.mutation.js";
import { gameQuery } from "./game/game.query.js";
import { gameResolvers } from "./game/game.resolvers.js";
import { reviewQuery } from "./review/review.query.js";
import { reviewResolvers } from "./review/review.resolvers.js";
import { authorQuery } from "./author/author.query.js";
import { authorResolvers } from "./author/author.resolvers.js";
import _db from "./_db.js";

export const resolvers: Resolvers = {
  Query: {
    ...gameQuery,
    ...reviewQuery,
    ...authorQuery,
  },
  Author: { ...authorResolvers },
  Game: { ...gameResolvers },
  Review: { ...reviewResolvers },
  Mutation: {
    ...gameMutation,
  },
};
