import { styled } from "styled-components";

export const AboutContainer = styled.div`
  color: black;
  height: 100vh;
  display: flex;
  padding: 0 100px;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  text-align: center;
  color: #8294c4;
  gap: 30px;
  span {
    font-family: gabriola;
    font-size: 1.3em;
  }

  @media (max-width: 700px) {
    padding: 0 15px;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 450px) {
    text-align: left;
    padding: 0 15px;
    align-items: flex-start;
    justify-content: center;
  }
`;
