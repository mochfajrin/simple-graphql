import { Author, Game, Review } from "../__generated__/resolvers-types";
import _db from "../_db";

export const reviewResolvers = {
  async game(review: Review): Promise<Game> {
    return _db.games.find((e) => e.id === review.game_id);
  },
  async author(review: Review): Promise<Author> {
    return _db.authors.find((e) => e.id === review.author_id);
  },
};
