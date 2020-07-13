import React, { useState, useCallback, useEffect } from "react";
import { SearchBar } from "react-native-elements";
import { useQuery } from "@apollo/react-hooks";
import GET_REPOS_BY_USERNAME from "../../graphql/getReposQuery";
import { connect } from "react-redux";
import {
  StyledButton,
  StyledView,
  StyledSwitch,
  DarkModeTitle,
  DarkModeView,
  InfoText
} from "./home.styles";
import Repo from "../../components/Repo";
import {
  setDarkMode,
  setLightMode,
  setUsername
} from "../../actions/generalActions";

const Home = props => {
  const [username, changeUsername] = useState("");
  const [skipQuery, updateSkipQuery] = useState(true);
  const [repo, updateRepo] = useState(null);

  const { data, loading, error } = useQuery(GET_REPOS_BY_USERNAME, {
    variables: {
      login: username,
      first: 1
    },
    skip: skipQuery
  });

  if (data && data.repositoryOwner) {
    updateSkipQuery(true);
    if (data.repositoryOwner.repositoriesContributedTo.totalCount >= 0)
      updateRepo(data.repositoryOwner.repositoriesContributedTo.edges[0].node);
  }

  const newTextValue = useCallback(val => {
    changeUsername(val);
    props.setUsername(val);
  }, []);

  const searchButtonPressed = useCallback(() => {
    updateSkipQuery(false);
  });

  const reposButtonPressed = useCallback(() => {
    props.navigation.navigate("TopRepos");
  });

  return (
    <StyledView color={props.theme.backgroundColor}>
      <DarkModeView>
        <DarkModeTitle color={props.theme.secondaryColor}>
          {props.darkModeOn ? "Light" : "Dark"} mode
        </DarkModeTitle>
        <StyledSwitch
          value={props.darkModeOn}
          onValueChange={() => {
            props.darkModeOn ? props.setLightMode() : props.setDarkMode();
          }}
        />
        <StyledButton
          mode="contained"
          onPress={reposButtonPressed}
          color={props.theme.secondaryColor}
          noUpperMargin
          noRightMargin
        >
          Top 10 Repos
        </StyledButton>
      </DarkModeView>
      <SearchBar
        placeholder="Enter username.."
        onChangeText={newTextValue}
        value={username}
        lightTheme
        containerStyle={{ backgroundColor: props.theme.backgroundColor }}
      />
      <StyledButton
        mode="contained"
        onPress={searchButtonPressed}
        loading={loading}
        color={props.theme.secondaryColor}
      >
        Find most successful repository
      </StyledButton>
      {error && (
        <InfoText color={props.theme.secondaryColor}>Please try again</InfoText>
      )}
      {repo && (
        <Repo
          key={repo.id}
          primaryColor={props.theme.secondaryColor}
          secondaryColor={props.theme.secondaryColor}
          repoTitle={repo.name}
          repoSubtitle={repo.description}
          stargazers={repo.stargazers.totalCount}
        />
      )}
    </StyledView>
  );
};

const mapStateToProps = ({ general }) => {
  return general;
};

const mapDispatchToProps = dispatch => {
  return {
    setDarkMode: () => dispatch(setDarkMode()),
    setLightMode: () => dispatch(setLightMode()),
    setUsername: username => dispatch(setUsername(username))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
