import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'type-graphql';

export class GraphQLServer {
  constructor() {}

  public async getServer(): Promise<any> {
    return [
      graphqlHTTP({
        customFormatErrorFn: null,
        graphiql: true,
        schema: await buildSchema({
          resolvers: [null]
        })
      })
    ]
  }
}