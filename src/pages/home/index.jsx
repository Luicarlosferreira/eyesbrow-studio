import { HomeContainer } from "./styles";
import { Fade } from "react-awesome-reveal";
import { FcVoicePresentation, BsInstagram, BsWhatsapp } from "react-icons/all";
export const HomePage = () => {
  return (
    <HomeContainer>
      <Fade triggerOnce={true}>
        <section id="home">
          <div className="section-info">
            <h1>Comece o seu dia mais linda!</h1>
            <p>
              Seja um reflexo do melhor que você pode desejar para si mesma.
            </p>
            <button>
              <a href="#schedule">Agendar</a>
            </button>
          </div>
        </section>

        <div className="info-container">
          <div className="imageContainer">
            <img src="/images/exampleTwo.jpg" alt="image about home section" />{" "}
          </div>
          <div className="info_text">
            <h1>Cuide sempre do que é importante para você!</h1>
            <p>
              Não precisa medir esforços para cuidar da sua aparência,
              entregue-se ao melhor tratamento com serviço de qualidade. Possuo
              experiência como designer de sobrancelhas, técnica em depilação há
              17 anos, e micropigmentação . Buscando reconstruir as estruturas
              naturais das sobrancelhas. Espero sempre trazer os principais
              requisitos para seu bem estar, com o trabalho mais delicado para a
              pele, o design mais adequado ao seu rosto, e te fazer sentir-se
              mais confiante e bonita. Venha conhecer o meu ambiente de
              trabalho!
            </p>
          </div>
        </div>

        <div className="second-info-container">
          <hr />
          <h1>Como funciona?</h1>
          <div className="box-info-container">
            <div>
              <h1>Local</h1>
              <p>
                Nosso espaço está no distrito do Porto, Porto - Rua Santa
                Catarina 1557, piso 1 loja 30 galerias Atlantis.
                <br />
                <br />
                <a
                  href="https://www.google.com/maps/dir//Dijiane+Dutra+designe+e+micro.,+Galerias+Atlantis,+R.+de+Santa+Catarina+1557+piso+1+loja+30,+4000-443+Porto/@41.1600724,-8.6071862,17z/data=!4m18!1m8!3m7!1s0xd246550737b383b:0xe4f531cab8ed56c3!2sDijiane+Dutra+designe+e+micro.!8m2!3d41.1600724!4d-8.6046113!15sCj5Qb3J0by9SdWEgU2FudGEgQ2F0YXJpbmEgMTU1NyBwaXNvIDEgbG9qYSAzMCBnYWxlcmlhcyBBdGxhbnRpc5IBDGJlYXV0eV9zYWxvbuABAA!16s%2Fg%2F11t1byrdzd!4m8!1m0!1m5!1m1!1s0xd246550737b383b:0xe4f531cab8ed56c3!2m2!1d-8.604655!2d41.1600735!3e2?hl=pt-PT"
                  target="_blank"
                >
                  Ver Localização
                </a>
              </p>
            </div>
            <div>
              <h1>Qualidade</h1>
              <p>
                Os serviços são todos feitos com excelência e qualidade. Aqui,
                se apresenta o melhor atendimento possível. Sem esforços para
                você sair mais linda do que o normal.
              </p>
            </div>
            <div>
              <h1>Agendamento</h1>
              <p>
                Para agendar seu atendimento pode entrar em contato via whatsApp
                e instagram. E terá um retorno no mesmo momento ou o mais breve
                possível.
              </p>
            </div>
          </div>
        </div>

        <div id="schedule">
          <hr />
          <h3>
            <FcVoicePresentation />
            Contacto
          </h3>
          <div className="social_medias">
            <a
              href="https://www.instagram.com/dijiane_sobrancelha/"
              target="_blank"
            >
              <BsInstagram />
            </a>
            <a href="#">
              <BsWhatsapp />
            </a>
          </div>
          <p>
            Faça um contacto via Instagram ou Whatsapp clicando no ícone acima,
            e vamos fazer o agendamento para cuidar com todo amor de suas lindas
            sobrancelhas.
          </p>
        </div>
      </Fade>
    </HomeContainer>
  );
};
