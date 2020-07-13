import styled from "styled-components/native";
import { Button, Switch } from "react-native-paper";

export const StyledButton = styled(Button)`
  marginTop: ${props => props.noUpperMargin ? 0 : 20};
  marginLeft: 40;
  marginRight: ${props => props.noRightMargin ? 0 : 40};
`;

export const StyledView = styled.View`
  backgroundColor: ${props => props.color};
  height: 100%;
`;

export const StyledSwitch = styled(Switch)`
`;

export const DarkModeTitle = styled.Text`
  color: ${props => props.color};
  fontSize: 20;
  marginRight: 20;
`;

export const DarkModeView = styled.View`
  flexDirection: row;
  paddingTop: 20;
  paddingBottom: 20;
  alignItems: center;
  justifyContent: center;
`;

export const InfoText = styled.Text`
  color: ${props => props.color};
  alignSelf: center;
  paddingTop: 30;
  fontSize: 20;
`;