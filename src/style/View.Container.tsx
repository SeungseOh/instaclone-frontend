import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: black;
`;

export const ContainerForm = styled(Container)`
  padding: 0px 50px;
`;

export const ImageContainer = styled.TouchableOpacity``;

export const IconContainer = styled.View`
  position: absolute;
  bottom: 5px;
  right: 0px;
`;

export const ButtonsContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SliderContainer = styled.View``;

export const ActionsContainer = styled.View`
  flex-direction: row;
`;

export const CaptionContainer = styled.View`
  margin-top: 30px;
`;

export const MessageContainer = styled.View<any>`
  padding: 0px 10px;
  flex-direction: ${(props) => (props.outGoing ? "row-reverse" : "row")};
  align-items: flex-end;
`;

export const InputContainer = styled.View`
  width: 95%;
  margin-bottom: 50px;
  margin-top: 25px;
  flex-direction: row;
  align-items: center;
`;
