import styled from "styled-components/native";
import { colors } from "../colors";

export const Container = styled.View`
  flex: 1;
  background-color: black;
`;

export const Top = styled.View`
  flex: 1;
  background-color: black;
`;

export const Bottom = styled.View`
  flex: 1;
  background-color: black;
`;

export const ImageContainer = styled.TouchableOpacity``;

export const IconContainer = styled.View`
  position: absolute;
  bottom: 5px;
  right: 0px;
`;

export const HeaderRightText = styled.Text`
  color: ${colors.blue};
  font-size: 16px;
  font-weight: 600;
  margin-right: 7px;
`;

export const Actions = styled.View`
  flex: 0.35;
  padding: 0px 50px;
  align-items: center;
  justify-content: space-around;
`;

export const ButtonsContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TakePhotoBtn = styled.TouchableOpacity`
  width: 100px;
  height: 100px;
  background-color: rgba(255, 255, 255, 0.5);
  border: 2px solid rgba(255, 255, 255, 0.8);
  border-radius: 50px;
`;

export const SliderContainer = styled.View``;

export const ActionsContainer = styled.View`
  flex-direction: row;
`;

export const CloseButton = styled.TouchableOpacity`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const PhotoActions = styled(Actions)`
  flex-direction: row;
`;

export const PhotoAction = styled.TouchableOpacity`
  background-color: white;
  padding: 10px 25px;
  border-radius: 4px;
`;
export const PhotoActionText = styled.Text`
  font-weight: 600;
`;

export const ContainerForm = styled(Container)`
  padding: 0px 50px;
`;

export const Photo = styled.Image`
  height: 350px;
`;

export const CaptionContainer = styled.View`
  margin-top: 30px;
`;

export const Caption = styled.TextInput`
  background-color: white;
  color: black;
  padding: 10px 20px;
  border-radius: 100px;
`;