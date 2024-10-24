import { Game, Review } from "../__generated__/resolvers-types";
import _db from "../_db";

export const gameResolvers = {
  async reviews(parent: Game): Promise<Array<Review>> {
    const reviews: Array<Review> = _db.reviews
      .filter((e) => e.game_id === parent.id)
      .map((review: Review) => {
        return {
          ...review,
          game: _db.games.find((e) => e.id === review.game_id),
          author: _db.authors.find((e) => e.id === review.author_id),
        };
      });

    return reviews;
  },
};
