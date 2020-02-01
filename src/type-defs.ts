import { gql } from "apollo-server";

export default gql`
  type Query {
    """
    Test Message.
    """
    allVarieties: [Variety]!
    variety(id: ID!): Variety!
  }

  type Variety {
    id: ID!
    name: String
  }
`;
