import styled from "styled-components";

export const HeaderContainer = styled.header`
  border-bottom: 1px solid #f1f6f9;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: fixed;
  background-color: ${(props) => props.theme};
  width: 100%;
  transition: all 0.1s linear;
  z-index: 2;

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
  }
  ul li {
    list-style: none;
    font-size: 1.5em;
    color: #8294c4;
  }
  ul li a {
    color: #8294c4;
    font-family: Helvetica, serif;
    text-decoration: none;
    font-weight: 400;
    letter-spacing: 1px;
    transition: 0.1s linear;
  }
  ul li a:hover {
    color: #4e5b82;
  }

  img {
    max-width: 150px;
    max-height: 150px;
    border-radius: 50%;
  }
  svg {
    display: none;
  }
  .mobile-list {
    display: none;
  }

  @media (max-width: 690px) {
    img {
      max-width: 100px;
      max-height: 100px;
      border-radius: 50%;
    }
    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 30px;
    }
    ul li {
      list-style: none;
      font-size: 1.3em;
      color: #8294c4;
    }
  }

  @media (max-width: 640px) {
    border-bottom: 1px solid #f1f6f9;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    svg {
      display: block;
      width: 35px;
      height: 35px;
      color: #4e5b82;
      z-index: 10000;
    }
    .ul-desktop {
      display: none;
    }
    .mobile-list {
      position: fixed;
      top: 0;
      right: 0;
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: center;
      background-color: #8294c4;
      width: 0%;
      height: 100%;
      opacity: 0;
      transition: all 0.1s linear;
    }
    .mobile-list-active {
      z-index: 100;
      opacity: 1;
      transition: all 0.1s linear;
      position: fixed;
      top: 0;
      right: 0;
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: center;
      background-color: #8294c4;
      width: 100%;
      height: 100%;
    }
    .mobile-list-active ul {
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: center;
      color: white;
    }
    .mobile-list-active ul a {
      color: white;
    }
    .mobile-list ul {
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: center;
      color: white;
    }
    .mobile-list ul a {
      color: white;
    }
  }
`;
