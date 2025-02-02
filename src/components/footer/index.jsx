import { Link, useLocation } from "react-router-dom";
import { FooterContainer } from "./styles";
import { useEffect } from "react";

const session = JSON.parse(localStorage.getItem("token"));
const FooterComponent = () => {
  const logout = () => {
    localStorage.clear();
    location.replace("/");
  };

  //Title Dynamic routes
  const path = useLocation();
  useEffect(() => {
    document.title = `Dijiane Dutra  - ${path.pathname.slice(1).toLocaleUpperCase()}`;
  }, [path.pathname]);

  return (
    <FooterContainer
      theme={session ? "fixed" : "relative" && path.pathname === "/admin/signin" && "fixed"}
    >
      {session ? (
        <span
          onClick={logout}
          style={{
            color: "green",
            cursor: "pointer",
            borderBottom: "1px solid black",
            background: "black",
            padding: 6,
            border: "1px solid",
            outline: "none",
            borderRadius: "5px",
          }}
          to="/"
        >
          Página Usuário
        </span>
      ) : (
        <Link to="/admin/signin">Copyright 2023.Dijiane-Studio | Todos os direitos reservados</Link>
      )}
    </FooterContainer>
  );
};

export default FooterComponent;
