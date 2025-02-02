import styled from "styled-components";

export const AsideComponent = styled.aside`
  background-color: #0a132a;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: column;
  gap: 4em;
  flex-wrap: wrap;
  div {
    padding: 15px;
  }
  div:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-flow: column;
    gap: 10px;
    height: 35%;
  }
  div h1 {
    font-family: Helvetica, serif;
    color: #f1f6f9;
  }
  div ul {
    list-style: none;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: center;
    gap: 40px;
    padding-top: 30px;
  }
  div svg {
    font-size: 1.3em;
  }
  div ul li a {
    text-decoration: none;
    color: #f1f6f9;
    font-family: Helvetica, serif;
    cursor: pointer;
    transition: all 0.1s linear;
    font-size: 1.3em;
    font-weight: 600;
  }
  div ul li a:hover {
    color: #acb1d6;
  }
  div:nth-child(2) {
    height: 35%;
    padding: 10px;
    position: relative;
    align-items: center;
    justify-content: center;
    gap: 30px;
    display: flex;
    flex-flow: column;
    font-family: Arial, Helvetica, sans-serif;
  }
  div:nth-child(2) svg:hover {
    color: #353748;
  }
  div:nth-child(2) svg {
    color: white;
    font-size: 2em;
    cursor: pointer;
    transition: all 0.1s linear;
  }
  svg:focus {
    color: red;
  }

  @media (max-width: 600px) {
    background-color: #8294c4;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-flow: column;
    gap: 4em;
    flex-wrap: wrap;
    div h1 {
      display: none;
    }
    div svg {
      font-size: 1em;
    }
    div:nth-child(2) svg {
      color: white;
      font-size: 1.5em;
      cursor: pointer;
      transition: all 0.1s linear;
    }
  }
`;
