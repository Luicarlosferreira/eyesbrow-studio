import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  section {
    background-image: url("/images/bg.jpg");
    background-position: center;
    background-size: cover;
    height: 100vh;
    display: flex;
    align-items: flex-end;
    justify-content: center;

    .section-info {
      color: white;
      font-family: serif;
      color: white;
      padding: 50px 0;
      display: flex;
      flex-flow: column;
      gap: 10px;
      align-items: center;
      text-align: center;
    }
    .section-info h1 {
      font-size: 4em;
      font-family: "Dancing Script", cursive;
    }
    .section-info p {
      font-size: 1.2em;
    }
    .section-info button {
      padding: 10px 30px;
      border-radius: 5px;
      border: none;
      color: white;
      background-color: #8294c4;
      cursor: pointer;
      transition: all 0.1s linear;
      font-weight: 600;
      letter-spacing: 1px;
      font-size: 1.2em;
      font-family: Tahoma;
    }
    .section-info button a {
      text-decoration: none;
      color: white;
    }
    .section-info button:hover {
      background-color: #475685;
    }
  }

  .info-container {
    width: 100%;
    display: flex;
    padding: 100px 0;
  }
  .info-container div:nth-child(1) {
    width: 70%;
  }
  .info-container div img {
    max-width: 80%;
    min-height: 350px;
    border-radius: 0px 10px 10px 0;
    filter: saturate(0);
  }
  .info-container div:nth-child(2) {
    max-width: 50%;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: center;
    gap: 30px;
  }
  .info-container div:nth-child(2) h1 {
    color: #8294c4;
    font-size: 2em;
    font-family: "Dancing Script", cursive;
  }
  .info-container div:nth-child(2) p {
    max-width: 70%;
    font-size: 1.2em;
  }

  .second-info-container {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 100px 0;
    gap: 50px;
  }
  .second-info-container hr {
    width: 90%;
  }
  .second-info-container h1:nth-child(2) {
    color: #475685;
    font-family: "Dancing Script", cursive;
    font-size: 3em;
  }
  .box-info-container {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 20px;
    flex-wrap: wrap;
  }
  .box-info-container div {
    max-width: 300px;
    min-height: 300px;
    padding: 10px;
    background-color: #4757853d;
    border-radius: 10px;
    box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.134);
    transition: all 0.1s linear;
    object-fit: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #8294c4;
    flex-flow: column;
  }
  .box-info-container div h1 {
    color: #475685;
    font-family: "Dancing Script", cursive;
  }
  .box-info-container div a {
    color: blue;
  }

  /* schedule Section */

  #schedule {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    padding: 10em 0;
    text-align: center;
    hr {
      width: 50%;
    }
    h3 {
      color: #475685;
      font-family: "Dancing Script", cursive;
      font-size: 2.5em;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
    }
  }
  .social_medias {
    display: flex;
    gap: 40px;
  }
  .social_medias a {
    text-decoration: none;
    color: #475685;
    cursor: pointer;
    transition: all 0.1s linear;
    background-color: #8294c4;
    padding: 4px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .social_medias a svg {
    width: 20px;
    height: 20px;
    color: white;
  }
  .social_medias a:hover {
    text-decoration: none;
    color: #262e47;
    cursor: pointer;
  }

  @media (max-width: 1020px) {
    .info-container {
      width: 100%;
      display: flex;
      padding: 100px 0;
    }
    .info-container div:nth-child(1) {
      width: 90%;
    }
    .info-container div img {
      max-width: 90%;
      min-height: 350px;
      border-radius: 0px 10px 10px 0;
      filter: saturate(0);
    }
    .info-container div:nth-child(2) {
      max-width: 50%;
      display: flex;
      flex-flow: column;
      align-items: flex-start;
      justify-content: center;
      gap: 30px;
    }
    .info-container div:nth-child(2) h1 {
      color: #8294c4;
      font-size: 2em;
      font-family: "Dancing Script", cursive;
    }
    .info-container div:nth-child(2) p {
      max-width: 90%;
      font-size: 1.1em;
    }
  }

  @media (max-width: 750px) {
    section {
      height: 100vh;
    }
    .info-container {
      width: 100%;
      display: flex;
      padding: 100px 0;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 30px;
    }
    .info-container div:nth-child(1) {
      width: 100%;
      text-align: center;
    }
    .info-container div img {
      max-width: 90%;
      min-height: 350px;
      border-radius: 10px;
      filter: saturate(0);
    }
    .info-container div:nth-child(2) {
      max-width: 90%;
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      gap: 20px;
    }
    .info-container div:nth-child(2) h1 {
      color: #8294c4;
      font-size: 2em;
      font-family: "Dancing Script", cursive;
    }
    .info-container div:nth-child(2) p {
      text-align: center;
      max-width: 100%;
      font-size: 1.1em;
    }
  }

  @media (max-width: 600px) {
    section {
      height: 100vh;
      .section-info {
        color: white;
        font-family: serif;
        color: white;
        padding: 65px 15px;
        display: flex;
        flex-flow: column;
        gap: 10px;
        align-items: center;
        text-align: center;
      }
      .section-info h1 {
        font-size: 2em;
        font-family: "Dancing Script", cursive;
      }
      .section-info p {
        font-size: 1.1em;
      }
    }

    #schedule {
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: center;
      gap: 30px;
      padding: 10em 0;
      text-align: center;
      width: 90%;
      margin: auto;
      hr {
        width: 90%;
      }
      h3 {
        color: #475685;
        font-family: "Dancing Script", cursive;
        font-size: 2.5em;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
      }
    }
    .social_medias {
      display: flex;
      gap: 40px;
    }
    .social_medias a {
      text-decoration: none;
      color: #475685;
      cursor: pointer;
      transition: all 0.1s linear;
    }
    .social_medias a svg {
      width: 20px;
      height: 20px;
    }
    .social_medias a:hover {
      text-decoration: none;
      color: #262e47;
      cursor: pointer;
    }
  }
`;
