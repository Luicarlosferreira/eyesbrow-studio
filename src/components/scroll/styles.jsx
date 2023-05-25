import styled from "styled-components";

export const ScrollContainer = styled.div`
  position: fixed;
  right: 2.2%;
  display: flex;
  bottom: 3%;
  animation: FadeMenu 0.2s linear;
  z-index: 10000;

  svg {
    color: #8294c4;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    cursor: pointer;
    transition: all 0.2s linear;
    animation: FadeMenu 0.2s linear;
    box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.266);
  }
  @keyframes FadeMenu {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
