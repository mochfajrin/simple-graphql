export const typeDefs = `#graphql
    type Game {
        id: ID!,
        title: String!,
        platform: [String!]!,
        reviews: [Review!]
    }
    type Review {
        id: ID!,
        game_id: String,
        rating: Int!,
        content: String!
        game: Game!
        author: Author!
    }
    type Author {
        id: ID!,
        name: String!,
        verified: Boolean!,
        reviews: [Review!]
    }
    type Query {
        game(id: ID!): Game,
        author(id: ID!): Author,
        review(id: ID!): Review,
        games: [Game],
        authors: [Author]
        reviews: [Review],
    }
    type Mutation {
        deleteGame(id: ID!): [Game],
        addGame(game: AddGameInput): Game
        updateGame(id: ID!, game: UpdateGameInput): Game
    }
    input UpdateGameInput {
        title: String!,
        platform: [String!]!,
    }
    input AddGameInput{
        title: String!,
        platform: [String!]!,
    }
`;