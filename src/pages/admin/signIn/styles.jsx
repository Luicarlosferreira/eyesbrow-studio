import { styled } from "styled-components";

export const SignInContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-flow: column;
  flex-wrap: wrap;
  padding-top: 3em;
  gap: 20px;
  align-items: center;
  justify-content: center;
  h1 {
    color: #8294c4;
  }
  form {
    display: flex;
    flex-flow: column;
    flex-wrap: wrap;
    gap: 20px;
    width: 28%;
  }
  form input {
    padding: 10px;
    width: 100%;
    outline: none;
    border: 1px solid #63739e;
  }
  form button {
    width: 100%;
    padding: 10px;
    margin: auto;
    cursor: pointer;
    border: none;
    background-color: #8294c4;
    font-weight: 600;
    font-size: 1.4em;
    color: white;
    border-radius: 5px;
    transition: all 0.1s linear;
  }
  form button:hover {
    background-color: #63739e;
  }
  form button:disabled {
    background-color: gray;
    cursor: not-allowed;
  }
  @media (max-width: 1000px) {
    form {
      display: flex;
      flex-flow: column;
      flex-wrap: wrap;
      gap: 20px;
      width: 50%;
    }
  }
  @media (max-width: 820px) {
    form {
      display: flex;
      flex-flow: column;
      flex-wrap: wrap;
      gap: 20px;
      width: 70%;
    }
  }
  @media (max-width: 600px) {
    form {
      display: flex;
      flex-flow: column;
      flex-wrap: wrap;
      gap: 20px;
      width: 60%;
    }
  }
  @media (max-width: 420px) {
    form {
      display: flex;
      flex-flow: column;
      flex-wrap: wrap;
      gap: 20px;
      width: 90%;
    }
  }
`;
