import { AboutContainer } from "./styles";
import { FcAbout } from "react-icons/all";
import { Fade } from "react-awesome-reveal";
export const About = () => {
  return (
    <AboutContainer>
      <Fade triggerOnce={true}>
        <h1>
          Sobre o estúdio Dijiane Dutra...
          <FcAbout />
        </h1>
        <p>
          Apaixonada em cuidar da beleza das pessoas, motivada em manter o bem
          estar e a auto estima de suas clientes. Dijiane está sempre se
          atualizando com o mercado e novas técnicas para cada dia progredir
          mais em poder entregar o melhor serviço, com qualidade, excelência e
          transparência. Venha conhecer o Estúdio Dijiane Dutra e fique a
          vontade para tirar suas dúvidas e usufruir do melhor serviço.
          <br />
          <br />
          <span style={{ color: "#4863a7", fontFamily: "serif" }}>
            Designer de sobrancelhas e Micropigmentadora Técnica em depilação.
          </span>
        </p>
      </Fade>
      <br />
      <span> - Dijiane Dutra</span>
    </AboutContainer>
  );
};
