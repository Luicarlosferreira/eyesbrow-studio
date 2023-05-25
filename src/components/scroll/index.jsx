import { useState } from "react";
import { ScrollContainer } from "./styles";
import { TbArrowBigUpFilled } from "react-icons/all";

export const ScrollComponent = () => {
  const [displayScroll, setDisplayScroll] = useState(false);
  const handeScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  window.addEventListener("scroll", () => {
    const scrolling = document.documentElement.scrollTop;
    scrolling > 100 ? setDisplayScroll(true) : setDisplayScroll(false);
  });

  return (
    <ScrollContainer>
      {displayScroll && <TbArrowBigUpFilled onClick={handeScroll} />}
    </ScrollContainer>
  );
};
