import "./footer.css";
import Image from "next/image";
import Seta from "../assets/imgs/mais.png";
import FiapLogo2 from "../assets/imgs/fiaplogo2.png";
import LetsRock from "../assets/imgs/lets-rock.png"
import React, { useState, useEffect } from "react";

const Footer = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleMouseEnter = (question) => {
    setSelectedQuestion(question);
  };

  const handleMouseLeave = () => {
    setSelectedQuestion(null);
  };

  return (
    <>
    
      <footer className="container3">
        <h3 className="cor-branca fonte-padrao3">FAQ</h3>
        <p className="cor-fiap">Dúvidas Frequentes</p>

        <div className="container">
        
          <div className="perguntas">
          <Image src={Seta} alt="Seta FIAP" className="pointer" onMouseEnter={() => handleMouseEnter("matricula")}
              onMouseLeave={handleMouseLeave}/>
            <p
              className="cor-branca pergunta hover-fiap"
              onMouseEnter={() => handleMouseEnter("matricula")}
              onMouseLeave={handleMouseLeave}
            >
              ONDE POSSO ME MATRICULAR?
            </p>
            {selectedQuestion === "matricula" && (
              <p
                className={`cor-descricao resposta ${
                  selectedQuestion === "matricula" ? "show" : ""
                }`}
              >
                Você pode se matricular em qualquer dia e hora, basta acessar a
                página do curso e se inscrever.
              </p>
            )}
            {selectedQuestion === "matricula" && (
              <hr
                className={`resposta-hr linha2 ${
                  selectedQuestion === "matricula" ? "show" : ""
                }`}
              />
            )}
          </div>

          <div className="perguntas">
          <Image src={Seta} alt="Seta FIAP" className="pointer" onMouseEnter={() => handleMouseEnter("certificado")}
              onMouseLeave={handleMouseLeave}/>
            <p
              className="cor-branca pergunta hover-fiap"
              onMouseEnter={() => handleMouseEnter("certificado")}
              onMouseLeave={handleMouseLeave}
            >
              COMO POSSO OBTER MEU CERTIFICADO?
            </p>
            {selectedQuestion === "certificado" && (
              <p
                className={`cor-descricao resposta ${
                  selectedQuestion === "certificado" ? "show" : ""
                }`}
              >
                Sim. Apenas atente-se às datas, elas devem ser diferentes,
                porque cada curso tem sua dinâmica.
              </p>
            )}
            {selectedQuestion === "certificado" && (
              <hr
                className={`resposta-hr linha2 ${
                  selectedQuestion === "certificado" ? "show" : ""
                }`}
              />
            )}
          </div>

          <div className="perguntas">
          <Image src={Seta} alt="Seta FIAP" className="pointer" onMouseEnter={() => handleMouseEnter("duvidas")}
              onMouseLeave={handleMouseLeave}/>
            <p
              className="cor-branca pergunta hover-fiap"
              onMouseEnter={() => handleMouseEnter("duvidas")}
              onMouseLeave={handleMouseLeave}
            >
              QUAIS OS PRÉ-REQUISITOS?
            </p>
            {selectedQuestion === "duvidas" && (
              <p
                className={`cor-descricao resposta ${
                  selectedQuestion === "duvidas" ? "show" : ""
                }`}
              >
                Cada curso tem seus pré-requisitos descritos na própria página.
                Identifique-os, para que você obtenha um melhor aproveitamento
                do seu SHIFT.
              </p>
            )}
            {selectedQuestion === "duvidas" && (
              <hr
                className={`resposta-hr linha2 ${
                  selectedQuestion === "duvidas" ? "show" : ""
                }`}
              />
            )}
          </div>

          <div className="perguntas">
          <Image src={Seta} alt="Seta FIAP" className="pointer" onMouseEnter={() => handleMouseEnter("duracao")}
              onMouseLeave={handleMouseLeave}/>
            <p
              className="cor-branca pergunta hover-fiap"
              onMouseEnter={() => handleMouseEnter("duracao")}
              onMouseLeave={handleMouseLeave}
            >
              QUAL A DURAÇÃO DOS CURSOS?
            </p>
            {selectedQuestion === "duracao" && (
              <p
                className={`cor-descricao resposta ${
                  selectedQuestion === "duracao" ? "show" : ""
                }`}
              >
                De 6 a 42 horas.
              </p>
            )}
            {selectedQuestion === "duracao" && (
              <hr
                className={`resposta-hr linha2 ${
                  selectedQuestion === "duracao" ? "show" : ""
                }`}
              />
            )}
          </div>

          <div className="perguntas">
          <Image src={Seta} alt="Seta FIAP" className="pointer" onMouseEnter={() => handleMouseEnter("material")}
              onMouseLeave={handleMouseLeave}/>
            <p
              className="cor-branca pergunta hover-fiap"
              onMouseEnter={() => handleMouseEnter("material")}
              onMouseLeave={handleMouseLeave}
            >
              PRECISO LEVAR ALGUM MATERIAL PARA AS AULAS?
            </p>
            {selectedQuestion === "material" && (
              <p
                className={`cor-descricao resposta ${
                  selectedQuestion === "material" ? "show" : ""
                }`}
              >
                Não. Os materiais utilizados em sala de aula são fornecidos pela
                FIAP e as aulas mais técnicas são realizadas em nossos próprios
                laboratórios. Sugerimos somente que traga o que preferir para
                suas anotações.
              </p>
            )}
            {selectedQuestion === "material" && (
              <hr
                className={`resposta-hr linha2 ${
                  selectedQuestion === "material" ? "show" : ""
                }`}
              />
            )}
          </div>

          <div className="conclusao position6 ">
          <Image src={Seta} alt="Seta FIAP" className="pointer" onMouseEnter={() => handleMouseEnter("conclusao")}
              onMouseLeave={handleMouseLeave}/>
            <p
              className="cor-branca pergunta hover-fiap"
              onMouseEnter={() => handleMouseEnter("conclusao")}
              onMouseLeave={handleMouseLeave}
            >
              VOU RECEBER CERTIFICADO DE CONCLUSÃO DE CURSO?
            </p>
            {selectedQuestion === "conclusao" && (
              <p
                className={`cor-descricao resposta ${
                  selectedQuestion === "conclusao" ? "show" : ""
                }`}
              >
                Sim. Ao cumprir pelo menos 75% da carga horária do curso, você
                receberá um Certificado Digital, que poderá ser acessado na
                plataforma.
              </p>
            )}
            {selectedQuestion === "conclusao" && (
              <hr
                className={`resposta-hr linha2 ${
                  selectedQuestion === "conclusao" ? "show" : ""
                }`}
              />
            )}
          </div>
      <Image src={FiapLogo2} alt="Fiap FIAP" className="pointer centro3" width={250} height={80}/>
        </div>
      </footer>
      <center><p className="cor-fiap">FIAP © 2024 - Todos os Direitos reservados.</p></center>
      <Image src={LetsRock} alt="Lets FIAP" className="pointer centro4" width={250} height={200}/>
      <p className="cor-fiap">FEITO POR: RENAN BEZERRA DOS SANTOS - MONITOR FIAP</p>
      <p className="cor-fiap2">LINKEDIN: <a href="https://www.linkedin.com/in/renan-b-eth/" className="cor-fiap2">https://www.linkedin.com/in/renan-b-eth/ </a></p>
    </>

  );
};

export default Footer;
