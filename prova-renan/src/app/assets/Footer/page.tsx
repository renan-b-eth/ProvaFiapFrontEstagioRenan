import "./footer.css";
import LogoFiap from "../assets/logo-fiap.png";
import Image from "next/image";
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
      <footer>
        <h3 className="cor-branca fonte-padrao3">FAQ</h3>
        <p className="cor-fiap">Dúvidas Frequentes</p>

        <div className="container">
          <div className="perguntas">
            <p
              className="cor-branca pergunta"
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
                className={`resposta-hr ${
                  selectedQuestion === "matricula" ? "show" : ""
                }`}
              />
            )}
          </div>

          <div className="perguntas">
            <p
              className="cor-branca pergunta"
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
                className={`resposta-hr ${
                  selectedQuestion === "certificado" ? "show" : ""
                }`}
              />
            )}
          </div>

          <div className="perguntas">
            <p
              className="cor-branca pergunta"
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
                className={`resposta-hr ${
                  selectedQuestion === "duvidas" ? "show" : ""
                }`}
              />
            )}
          </div>

          <div className="perguntas">
            <p
              className="cor-branca pergunta"
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
                className={`resposta-hr ${
                  selectedQuestion === "duracao" ? "show" : ""
                }`}
              />
            )}
          </div>

          <div className="perguntas">
            <p
              className="cor-branca pergunta"
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
                className={`resposta-hr ${
                  selectedQuestion === "material" ? "show" : ""
                }`}
              />
            )}
          </div>

          <div className="conclusao">
            <p
              className="cor-branca pergunta"
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
                className={`resposta-hr ${
                  selectedQuestion === "conclusao" ? "show" : ""
                }`}
              />
            )}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
