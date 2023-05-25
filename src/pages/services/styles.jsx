import { styled } from "styled-components";

export const ServicesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12em 0;
  min-height: 96vh;

  section {
    padding: 20px 10px;
    min-width: 30%;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.08);
    display: flex;
    flex-flow: column;
    gap: 20px;

    h1 {
      color: #8294c4;
      font-family: serif;
      display: flex;
      align-items: center;
    }
    
    div {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px dotted black;
      padding: 6px 0;
    }
    div p {
      color: #00000090;
    }
  }
  @media (max-width: 1200px) {
    section {
      padding: 20px 10px;
      min-width: 80%;
      box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.08);
      display: flex;
      flex-flow: column;
      gap: 20px;

      h1 {
        color: #8294c4;
        font-family: serif;
      }

      div {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px dotted black;
        padding: 6px 0;
      }
    }
  }
  @media (max-width: 400px) {
    section {
      padding: 20px 10px;
      min-width: 90%;
      box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.08);
      display: flex;
      flex-flow: column;
      gap: 20px;

      h1 {
        color: #8294c4;
        font-family: serif;
      }

      div {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px dotted black;
        padding: 6px 0;
      }
    }
  }
`;
