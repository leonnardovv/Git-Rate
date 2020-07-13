import {
  ItemTitle,
  ItemSubtitle,
  StyledView,
  StarView,
  StarText
} from "./repo.styles";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default Repo = props => {
  return (
    <StyledView>
      <StarView>
        <StarText primaryColor={props.primaryColor}>
          {props.stargazers}
        </StarText>
        <Ionicons name="md-star-outline" size={20} color={props.primaryColor} />
      </StarView>
      <ItemTitle primaryColor={props.primaryColor}>
        {props.repoTitle || "No title provided"}
      </ItemTitle>
      <ItemSubtitle secondaryColor={props.secondaryColor}>
        {props.repoSubtitle || "No description available"}
      </ItemSubtitle>
    </StyledView>
  );
};
