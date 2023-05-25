import { styled } from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-flow: column;
  gap: 10px;
  width: 25%;

  input {
    padding: 10px;
    outline: none;
    border-radius: 5px;
    border: 1px solid transparent;
    background-color: #dbdfea;
    transition: all 0.1s linear;
  }
  input:focus {
    border: 1px solid #8294c4;
  }
  section {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    background-color: #dbdfea;
    padding: 1px 5px;
    border-radius: 5px;
  }
  section:focus {
    border: 1px solid #8294c4;
  }
  section svg {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }

  #inputPass {
    width: 100%;
    border-radius: 5px;
  }
  #inputPass:focus {
    border: 1px solid transparent;
  }

  button {
    width: 45%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #acb1d6;
    color: white;
    font-size: 1.1em;
    font-weight: 600;
    margin: auto;
    cursor: pointer;
    transition: all 0.1s linear;
  }
  button:hover {
    background-color: #8294c1;
  }

  @media (max-width: 1330px) {
    width: 50%;
    button {
      width: 100%;
      padding: 10px;
      border: none;
      border-radius: 5px;
      background-color: #acb1d6;
      color: white;
      font-size: 1.1em;
      font-weight: 600;
      margin: auto;
      cursor: pointer;
      transition: all 0.1s linear;
    }
  }
  @media (max-width: 800px) {
    width: 70%;
  }
  @media (max-width: 450px) {
    width: 100%;
  }
`;
