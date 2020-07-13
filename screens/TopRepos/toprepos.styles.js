import styled from "styled-components/native";

export const PageTitle = styled.Text`
  color: ${props => props.color};
  alignSelf: center;
  fontSize: 25;
  paddingTop: 20;
  paddingBottom: 20;
`;

export const InfoText = styled.Text`
  color: ${props => props.color};
  alignSelf: center;
  paddingTop: 30;
  fontSize: 20;
`;

export const StyledScrollView = styled.ScrollView`
  marginBottom: 100;
`;

export const ContainerView = styled.View`
  backgroundColor: ${props => props.color};
  height: 100%;
`;