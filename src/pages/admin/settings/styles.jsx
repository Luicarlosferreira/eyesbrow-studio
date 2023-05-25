import { styled } from "styled-components";

export const SettingsContainer = styled.div`
  width: 100%;
  padding: 25px;
  display: flex;
  flex-flow: column;
  gap: 30px;
  align-items: center;
  color: #8294c4;
  div {
    display: flex;
    flex-flow: column;
    gap: 25px;
    width: 30%;
  }
  div button {
    width: 30%;
    padding: 10px;
    margin: auto;
    cursor: pointer;
  }
  div div {
    width: 100%;
    display: flex;
    flex-flow: column;
    gap: 10px;
  }
  div div p {
    border-bottom: 1px solid #8294c4;
  }

  @media (max-width: 1330px) {
    div {
      display: flex;
      flex-flow: column;
      gap: 30px;
      width: 50%;
    }
    div button {
      width: 50%;
      padding: 10px;
      margin: auto;
      cursor: pointer;
    }
  }

  @media (max-width: 640px) {
    div {
      display: flex;
      flex-flow: column;
      gap: 30px;
      width: 100%;
    }
    div button {
      width: 50%;
      padding: 10px;
      margin: auto;
      cursor: pointer;
    }
  }
  @media (max-width: 400px) {
    padding: 10px;
    div button {
      width: 100%;
      padding: 10px;
      margin: auto;
      cursor: pointer;
    }
    h1 {
      font-size: 1em;
    }
  }
`;
