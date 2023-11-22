import React from "react";
import Dream from "../assets/Dream.svg";
import Notre from "../assets/Notre.svg";
import FIAP from "../assets/FIAP.svg";
import Monitoramento from "../assets/Monitoramento.svg";
import Habitos from "../assets/Habitos.svg";
import Relatorio from "../assets/Relatorio.svg";
import Prototipo from "../assets/Prototipo.svg";
import "../scss/Home.scss";

const Home = () => {
  return (
    <div className="home">
      <section className="banner">
        <img src={Dream} alt="DreamGuard Banner" />
      </section>

      <section className="partners">
        <div className="partner notredame">
          <img src={Notre} alt="NotreDame Logo" />
        </div>
        <div className="partner fiap">
          <img src={FIAP} alt="FIAP Logo" />
        </div>
      </section>

      <div className="aboutPrototypeContainer">
        <div className="prototype">
          <h1>Protótipo do DreamGuard</h1>
          <p>
            O protótipo do DreamGuard, utilizando o microcontrolador ESP32,
            incorpora um giroscópio e um acelerômetro para um monitoramento
            preciso do sono. Esses sensores captam movimentos corporais e a
            orientação durante o sono, fornecendo dados essenciais para analisar
            as fases do sono e a qualidade geral do descanso. Com esta
            tecnologia, o DreamGuard oferece uma visão detalhada do padrão de
            sono do usuário, contribuindo para recomendações personalizadas de
            melhoria do sono.
          </p>
          <img src={Prototipo} alt="DreamGuard Prototype" />
        </div>

        <div className="about">
          <h1>
            Conheça o DreamGuard: Sua Solução Inteligente para um Sono Perfeito
          </h1>
          <p>
            <span>Transforme Suas Noites: </span> Com o DreamGuard, as noites
            mal dormidas são coisa do passado. Este aplicativo inovador usa
            tecnologia avançada para monitorar seu sono, proporcionando análises
            profundas e recomendações personalizadas. <br />
            <span>Tecnologia Avançada de Monitoramento: </span>Através de
            sensores e wearables, o DreamGuard acompanha seus padrões de sono,
            identificando fases e qualidade, e oferecendo insights valiosos para
            melhorar seu descanso. <br />
            <span>Dicas Personalizadas para Dormir Melhor: </span>Receba
            conselhos sob medida para otimizar seu ambiente de sono e hábitos
            noturnos, garantindo uma noite de descanso tranquila e reparadora.{" "}
            <br />
            <span>Despertar Revigorante com Alarme Inteligente: </span>Nosso
            sistema de alarme inteligente acorda você no melhor momento do seu
            ciclo de sono, proporcionando um início de dia energizado e sem
            estresse. <br />
            <span>Privacidade Garantida: </span>A segurança dos seus dados é
            nossa prioridade. Com o DreamGuard, suas informações de sono estão
            protegidas, assegurando sua tranquilidade. <br />
            <span>Simples e Acessível: </span>Com uma interface intuitiva, o
            DreamGuard é fácil de usar, tornando a gestão da saúde do sono
            acessível a todos. <br />
            Descubra como o DreamGuard pode transformar suas noites e dias.
            Experimente agora e sinta a diferença de um sono verdadeiramente
            reparador!
          </p>
        </div>
      </div>

      <section className="features">
        <div className="feature">
          <img src={Monitoramento} alt="Monitoramento do Sono" />
          <h2>Monitoramento do Sono</h2>
          <p>
            Registre e analise seus padrões de sono para uma vida mais saudável.
          </p>
        </div>
        <div className="feature">
          <img src={Habitos} alt="Gerenciamento de Hábitos de Sono" />
          <h2>Gerenciamento de Hábitos de Sono</h2>
          <p>
            Receba recomendações personalizadas e configure lembretes para
            manter um ciclo de sono regular.
          </p>
        </div>
        <div className="feature">
          <img src={Relatorio} alt="Relatórios de Saúde do Sono" />
          <h2>Relatórios de Saúde do Sono</h2>
          <p>
            Acesse relatórios detalhados e obtenha insights visuais sobre a
            qualidade do seu sono.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
