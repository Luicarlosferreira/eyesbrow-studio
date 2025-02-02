import { styled } from "styled-components";

export const UpdatePriceContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #454544;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  flex-flow: column;
  h1 {
    color: white;
    text-align: center;
  }

  form {
    display: flex;
    flex-flow: column;
    width: 70%;
    gap: 20px;
  }
  .buttons {
    display: flex;
    gap: 50px;
  }
  form input {
    padding: 10px;
    width: 100%;
    outline: none;
    border: 1px solid #acb1d6;
    transition: all 0.1s linear;
  }
  form div input:focus {
    border: 1px solid #424f73;
  }
  form button {
    width: 40%;
    margin: auto;
    padding: 10px;
    border: none;
    background-color: #8294c4;
    color: white;
    font-weight: 600;
    font-size: 1.2em;
    transition: all 0.1s linear;
    cursor: pointer;
    border-radius: 5px;
  }
  form button:disabled {
    background-color: gray;
    cursor: not-allowed;
  }
  form button:hover {
    background-color: #acb1d6;
  }

  @media (max-width: 459px) {
    form {
      display: flex;
      flex-flow: column;
      width: 70%;
      gap: 20px;
    }
    .buttons {
      display: flex;
      flex-flow: row;
      justify-content: space-between;
      align-items: center;
      gap: 20px;
    }
    .buttons button {
      width: 150px;
    }
  }
`;
