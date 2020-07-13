import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { ApolloProvider } from "@apollo/react-hooks";
import generalReducer from "./reducers/generalReducer";
import Home from "./screens/Home/index";
import TopRepos from "./screens/TopRepos/index";
import { ROUTES } from "./consts";
import { client } from "./apolloSetup";

const store = createStore(generalReducer);

const LandingNavigator = createAppContainer(
  createStackNavigator({
    [ROUTES.Home]: Home,
    [ROUTES.TopRepos]: TopRepos
  })
);

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <LandingNavigator />
      </Provider>
    </ApolloProvider>
  );
}
