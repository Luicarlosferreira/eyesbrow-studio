import { styled } from "styled-components";

export const PricesContainer = styled.div`
  width: 75%;
  padding: 25px;
  display: flex;
  flex-flow: column;
  gap: 30px;
  color: #8294c4;
  align-items: center;

  form {
    display: flex;
    flex-flow: column;
    width: 50%;
    gap: 10px;
  }
  form div {
    display: flex;
    flex-flow: column;
  }
  form div label {
    color: #8294c4;
  }
  form div input {
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
    font-size: 1.3em;
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
  @media (max-width: 850px) {
    form {
      display: flex;
      flex-flow: column;
      width: 100%;
      gap: 10px;
      padding: 0 20px;
    }
  }
  @media (max-width: 600px) {
    width: 100%;
    padding: 25px;
    form {
      display: flex;
      flex-flow: column;
      width: 100%;
      gap: 10px;
    }

    form button {
      width: 100%;
      margin: auto;
      padding: 10px;
      border: none;

      background-color: #8294c4;
      color: white;
      font-weight: 600;
      font-size: 1.3em;
      transition: all 0.1s linear;
      cursor: pointer;
      border-radius: 5px;
    }
  }

  @media (max-width: 400px) {
    width: 100%;
    padding: 10px 5px;
    form {
      display: flex;
      flex-flow: column;
      width: 100%;
      gap: 10px;
    }
  }
`;
