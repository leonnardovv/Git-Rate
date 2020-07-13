import gql from "graphql-tag";

export default gql`
  query($login: String!, $first: Int!) {
    repositoryOwner(login: $login) {
      ... on User {
        repositoriesContributedTo(
          orderBy: { field: STARGAZERS, direction: DESC }
          first: $first
          contributionTypes: [COMMIT, PULL_REQUEST]
          includeUserRepositories: true
        ) {
          totalCount
          edges {
            node {
              id
              name
              description
              stargazers {
                totalCount
              }
            }
          }
        }
      }
    }
  }
`;
