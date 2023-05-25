import { styled } from "styled-components";

export const Container404 = styled.div`
  position: absolute;
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  flex-wrap: wrap;
  top: 0;
  width: 100%;
  height: 100%;
  font-family: Tahoma;
  gap: 30px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
  }
  a {
    text-decoration: none;
    padding: 10px;
    font-size: 1.3em;
    background-color: #8294c4;
    color: white;
    border-radius: 5px;
    cursor: pointer;
  }
`;
