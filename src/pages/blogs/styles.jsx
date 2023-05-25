import { styled } from "styled-components";

export const BlogContainer = styled.div`
  display: flex;
  padding: 12em 0;
  justify-content: center;
  flex-flow: column;
  align-items: center;

  section {
    width: 80%;
    display: flex;
    align-items: center;
    flex-flow: column;
    gap: 30px;
  }
  #read {
    color: gray;
    cursor: pointer;
    transition: all 0.1s linear;
  }
  #read:hover {
    color: #8294c4;
  }
  .content-post {
    min-width: 50%;
    max-width: 50%;
    display: flex;
    flex-flow: column;
    gap: 30px;
    align-items: flex-start;
    justify-content: center;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.08);
    border-radius: 10px;
    padding: 10px;
    transition: all 0.1s linear;
  }
  .content-post h1 {
    color: #8294c4;
    font-family: Dancing Script, serif;
    font-size: 2.5em;
    letter-spacing: 3px;
  }
  .content-post p {
    letter-spacing: 1px;
    font-family: serif;
  }
  .content-post img {
    max-width: 100%;
    border-radius: 10px;
  }

  @media (max-width: 1200px) {
    .content-post {
      max-width: 80%;
      display: flex;
      flex-flow: column;
      gap: 30px;
      align-items: flex-start;
      justify-content: center;
      box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.08);
      border-radius: 10px;
      padding: 10px;
    }
    .content-post h1 {
      color: #8294c4;
      font-family: Dancing Script, serif;
      font-size: 2.5em;
      letter-spacing: 3px;
    }
  }
  @media (max-width: 800px) {
    section {
      width: 90%;
      display: flex;
      align-items: center;
      flex-flow: column;
    }
    .content-post {
      max-width: 100%;
      display: flex;
      flex-flow: column;
      gap: 30px;
      align-items: flex-start;
      justify-content: center;
      box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.08);
      border-radius: 10px;
      padding: 10px;
    }
    .content-post h1 {
      color: #8294c4;
      font-family: Dancing Script, serif;
      font-size: 2em;
      letter-spacing: 3px;
    }
  }
  @media (max-width: 500px) {
    .content-post h1 {
      color: #8294c4;
      font-family: Dancing Script, serif;
      font-size: 2em;
      letter-spacing: 1px;
    }

    .content-post {
      max-width: 100%;
      display: flex;
      flex-flow: column;
      gap: 20px;
      align-items: flex-start;
      justify-content: center;
      box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.08);
      border-radius: 10px;
      padding: 10px;
    }
    .content-post p {
      font-size: 15px;
    }
  }
`;
