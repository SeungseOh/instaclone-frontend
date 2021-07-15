import styled from "styled-components/native";
import Colors from "./Colors";

export const Message = styled.Text`
  color: white;
  background-color: rgba(255, 255, 255, 0.3);
  padding: 5px 10px;
  overflow: hidden;
  border-radius: 10px;
  font-size: 16px;
  margin: 0px 10px;
`;

export const HeaderRightText = styled.Text`
  color: ${Colors.blue};
  font-size: 16px;
  font-weight: 600;
  margin-right: 7px;
`;

export const PhotoActionText = styled.Text`
  font-weight: 600;
`;

export const LoginLink = styled.Text`
  color: ${Colors.blue};
  font-weight: 600;
  margin-top: 20px;
  text-align: center;
`;
