import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #dbdfea;
  padding: 10px;
  position: ${(props) => props.theme};
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  font-size: 1em;
  color: #8294c4;
  text-align: center;
  font-family: Helvetica, serif;

  a {
    text-decoration: none;
    color: #8294c4;
    cursor: pointer;
    margin-left: 10px;
  }

  @media (max-width: 500px) {
    font-size: 12px;
  }
`;
