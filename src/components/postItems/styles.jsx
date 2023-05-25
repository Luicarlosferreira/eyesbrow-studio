import { styled } from "styled-components";

export const ContainerPost = styled.section`
  padding: 10px;
  width: 100%;
  display: flex;
  flex-flow: column;
  gap: 30px;
  flex-wrap: wrap;

  #modalDelet {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #0a0d16ed;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
    gap: 30px;
  }
  #modalDelet h1 {
    color: white;
    font-size: 2em;
    font-family: serif, Arial, Helvetica, sans-serif;
  }
  #modalDelet div {
    display: flex;
    gap: 10px;
  }
  #modalDelet div button {
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
  }

  h1 {
    color: #424f73;
  }
  .container-posts {
    width: 100%;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    overflow-y: scroll;
    height: 350px;
  }
  ul {
    list-style: none;
    display: flex;
    flex-flow: column;
    gap: 25px;
  }
  ul li {
    min-width: 300px;
    max-width: 150px;
    display: flex;
    border: 1px solid #424f73;
    padding: 10px;
    gap: 50px;
    flex-flow: column;
    align-items: center;
    color: #424f73;
    border-radius: 4px;
    flex-wrap: wrap;
  }
  ul li div {
    display: flex;

    gap: 6px;
  }
  ul li div button {
    padding: 5px 15px;
    width: 100%;
    cursor: pointer;
    border: none;
    background-color: #424f73;
    color: white;
    font-weight: 600;
    transition: 0.1s linear;
    border-radius: 5px;
  }
  ul li div button:hover {
    background-color: #acb1d6;
  }
  ul a {
    text-decoration: none;
    color: #424f73;
  }
  @media (max-width: 600px) {
    .container-posts {
      width: 100%;
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      overflow-y: scroll;
      height: 350px;
    }
    ul li {
      min-width: 200px;
      max-width: 300px;
      display: flex;
      border: 1px solid #424f73;
      padding: 10px;
      gap: 50px;
      flex-flow: column;
      align-items: center;
      color: #424f73;
      border-radius: 4px;
      flex-wrap: wrap;
    }
  }

  @media (max-width: 450px) {
    padding: 10px;
    width: 100%;
    display: flex;
    flex-flow: column;
    gap: 30px;
    flex-wrap: wrap;

    .container-posts {
      width: 100%;
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      overflow-x: scroll;
      max-height: 250px;
    }
    ul li {
      min-width: 230px;
      max-width: 300px;
      display: flex;
      border: 1px solid #424f73;
      padding: 10px;
      gap: 50px;
      flex-flow: column;
      align-items: center;
      color: #424f73;
      border-radius: 4px;
      flex-wrap: wrap;
    }
  }
`;
