import styled from "styled-components/native";

export const ItemTitle = styled.Text`
  color: ${props => props.primaryColor};
  alignSelf: center;
  fontSize: 20;
`;

export const ItemSubtitle = styled.Text`
  color: ${props => props.secondaryColor};
  alignSelf: center;
  paddingBottom: 20
  fontSize: 14
  textAlign: center;
`;

export const StyledView = styled.View`
  paddingTop: 20;
  paddingLeft: 20;
  paddingRight: 20;
  paddingBottom: 10;
`;

export const StarView = styled.View`
  flexDirection: row;
  justifyContent: center;
  alignItems: center;
`;

export const StarText = styled.Text`
  color: ${props => props.primaryColor};
  alignSelf: center;
  fontSize: 15;
`;