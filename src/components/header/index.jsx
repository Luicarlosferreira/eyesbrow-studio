import { HeaderContainer } from "./styles";
import { Link } from "react-router-dom";
import { RxHamburgerMenu, TfiClose } from "react-icons/all";
import { useState } from "react";
const Header = () => {
  const [menuMobile, setMenuMobile] = useState(false);
  const [scroll, setScroll] = useState(false);

  window.addEventListener("scroll", () => {
    const scrolling = document.documentElement.scrollTop;
    scrolling > 70 ? setScroll(true) : setScroll(false);
  });

  const handeScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <HeaderContainer theme={scroll ? "#f2f2f29f" : "white"}>
      <ul className="ul-desktop">
        <li>
          <Link onClick={handeScroll} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link onClick={handeScroll} to="/about">
            Sobre
          </Link>
        </li>
      </ul>
      <Link onClick={handeScroll} to="/">
        <img src="assets/logo.png" alt="logo image" />
      </Link>
      <ul className="ul-desktop">
        <li>
          <Link onClick={handeScroll} to="/services">
            Serviços
          </Link>
        </li>
        <li>
          <Link onClick={handeScroll} to="/blogs">
            Blogs
          </Link>
        </li>
      </ul>
      <div className={menuMobile ? "mobile-list-active" : "mobile-list"}>
        <ul>
          <li>
            <Link to="/" onClick={() => setMenuMobile(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setMenuMobile(false)}>
              Sobre
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={() => setMenuMobile(false)}>
              Serviços
            </Link>
          </li>
          <li>
            <Link to="/blogs" onClick={() => setMenuMobile(false)}>
              Blogs
            </Link>
          </li>
        </ul>
      </div>
      {!menuMobile ? (
        <RxHamburgerMenu onClick={() => setMenuMobile(true)} />
      ) : (
        <TfiClose onClick={() => setMenuMobile(false)} />
      )}
    </HeaderContainer>
  );
};

export default Header;
