import styled from "styled-components/native";

export const Top = styled.View`
  flex: 1;
  background-color: black;
`;

export const Bottom = styled.View`
  flex: 1;
  background-color: black;
`;

export const Author = styled.View``;

export const Actions = styled.View`
  flex: 0.35;
  padding: 0px 50px;
  align-items: center;
  justify-content: space-around;
`;

export const PhotoActions = styled(Actions)`
  flex-direction: row;
`;
