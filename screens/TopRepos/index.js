import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { useQuery } from "@apollo/react-hooks";
import {
  PageTitle,
  InfoText,
  StyledScrollView,
  ContainerView
} from "./toprepos.styles";
import Repo from "../../components/Repo";
import GET_REPOS_BY_USERNAME from "../../graphql/getReposQuery";

const TopRepos = props => {
  const { data, loading, error } = useQuery(GET_REPOS_BY_USERNAME, {
    variables: {
      login: props.inputUsername,
      first: 10
    }
  });

  if (loading)
    return <InfoText color={props.theme.primaryColor}>Loading..</InfoText>;

  if (error) return <InfoText color={props.theme.primaryColor}>Error</InfoText>;

  if (data && data.repositoryOwner !== null) {
    const repos = data.repositoryOwner.repositoriesContributedTo;
    return (
      <ContainerView color={props.theme.backgroundColor}>
        <PageTitle color={props.theme.primaryColor}>
          Top {repos.totalCount <= 10 ? repos.totalCount : "10"} Repos
        </PageTitle>
        <StyledScrollView>
          {repos.edges.map(({ node }) => (
            <Repo
              key={node.id}
              primaryColor={props.theme.primaryColor}
              secondaryColor={props.theme.secondaryColor}
              repoTitle={node.name}
              repoSubtitle={node.description}
              stargazers={node.stargazers.totalCount}
            />
          ))}
        </StyledScrollView>
      </ContainerView>
    );
  }

  return (
    <InfoText color={props.theme.secondaryColor}>
      Please try again (change username)
    </InfoText>
  );
};

const mapStateToProps = ({ general }) => {
  return general;
};

export default compose(
  connect(mapStateToProps)
  // withApollo
)(TopRepos);
