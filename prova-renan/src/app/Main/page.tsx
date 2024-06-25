"use client"
import "./main.css";
import React, { useState, useEffect, useLayoutEffect, createContext } from 'react';
import LogoIntro from '../assets/imgs/intro.png'
import BackInicial from '../assets/imgs/back.png'
import Image from "next/image";
import Seta from "../assets/imgs/seta.png";
import Feel from "../assets/imgs/feelthefuture.png";
import Imagem from "../assets/imgs/imagem.png";
import Mais from "../assets/imgs/mais.png";
import { useSpring, animated as a } from 'react-spring'; /* precisa instalar esse hook */
import { useLocation } from 'react-router-dom'; /*instalar esse tambem */
import { useRef } from 'react';
import Footer from "../Footer/page";
import Agua from "../Agua/page";


const Main = () =>{

    const props = useSpring({
        from: { x: -100 },
        to: { x: 100 },
        config: {
          duration: 2000,
          ease: 'cubic-bezier(0.4, 0, 0.2, 1)',
          loop: true,
          immediate: true,
        },
      });

      const [visible1, setVisible1] = useState(true);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);

  const handleClick1 = (event:any) => {
    setVisible1(true);
    setVisible2(false);
    setVisible3(false);
    setSelected(event.target);
  }

  const handleClick2 = (event:any) => {
    setVisible1(false);
    setVisible2(true);
    setVisible3(false);

    
  }

  const handleClick3 = (event:any) => {
    setVisible1(false);
    setVisible2(false);
    setVisible3(true);
  }

  const [selected, setSelected] = useState(null);

  

    return(
        <>
 
      
            <main className="cor-background-principal">
                <section>
                    <div id="centro">
                        <span class="posicao-texto">
                            <p className="fonte-padrao cor-branca index-tras position-texto-direta animacao2">A Melhor <span className="cor-fiap2">Faculdade</span></p>
                            <div>
                                <p className="fonte-padrao cor-branca position-fonte-tecnologia index-tras animacao">de Tecnologia</p>
                            </div>
                            <div>
                                <p className="fonte-padrao-sobreposto cor-cinza index-frente animacao-header">SOBRE</p>
                            </div>
                        </span>
                    </div>
                </section>

                <div  className="centro-intro position7">
                            <Image className= "efeito-imagem animacao4" src={Feel} alt="Feel" width={1200} height={600}/>
                </div>

                <div  className="centro-intro position6">
                            <Image className= "efeito-imagem " src={BackInicial} alt="Intro" width={1200} height={600}/>
                </div>
  
                    <section className="animated-text-container">
                        <span>
                            <div className="animation-container">
                                <div className="marquee-text">
                                <p className="fonte-2 cor-branca">CURSOS E IMERSÕES. UMA NOVA CULTURA DE MERCADO. CURSOS E IMERSÕES. UMA NOVA CULTURA DE MERCADO.</p>
                                </div>
                            </div>
                            <hr></hr>
                            <div className="animation-container">
                                <div className="marquee-text2">
                                <p className="fonte-2 cor-branca">TECNOLOGIA, INOVAÇÃO E NEGÓCIOS. PRESENTE E FUTURO. TECNOLOGIA, INOVAÇÃO E NEGÓCIOS. PRESENTE E FUTURO. TECNOLOGIA, INOVAÇÃO E NEGÓCIOS. PRESENTE E FUTURO.TECNOLOGIA, INOVAÇÃO E NEGÓCIOS. PRESENTE E FUTURO.TECNOLOGIA, INOVAÇÃO E NEGÓCIOS. PRESENTE E FUTURO.TECNOLOGIA, INOVAÇÃO E NEGÓCIOS. PRESENTE E FUTURO.TECNOLOGIA, INOVAÇÃO E NEGÓCIOS. PRESENTE E FUTURO.TECNOLOGIA, INOVAÇÃO E NEGÓCIOS. PRESENTE E FUTURO.TECNOLOGIA, INOVAÇÃO E NEGÓCIOS. PRESENTE E FUTURO.</p>
                                </div>
                            </div>
                            <hr></hr>
                        </span>
                        <div  className="centro-intro">
                            <Image className= "efeito-imagem" src={LogoIntro} alt="Intro" width={1200} height={600}/>
                        </div>
                        <span className="position3">
                            <div className="animation-container position4">
                                <div className="marquee-text">
                                    <p className="fonte-3 cor-transparente">SKILL ○  CONHECIMENTOS ○ SKILL ○  CONHECIMENTOS ○ SKILL ○  CONHECIMENTOS ○ SKILL ○  CONHECIMENTOS ○</p>
                                </div>
                            </div>
                            <div className="animation-container position5">
                                <div className="marquee-text2">
                            <p className="fonte-3 italico cor-transparente">TECNOLOGIA, INOVAÇÃO E NEGÓCIOS. PRESENTE E FUTURO. TECNOLOGIA, INOVAÇÃO E NEGÓCIOS. PRESENTE E FUTURO. TECNOLOGIA, INOVAÇÃO E NEGÓCIOS. PRESENTE E FUTURO.</p>

                            </div>
                            </div>
                            <hr></hr>
                        </span>
                    </section>
                    <Image className= "efeito-imagem2 efeitohover" src={Imagem} alt="Imagem"/>
                {/* <section>

                    <Agua></Agua>
                    Infelizmente não consegui realizar a animação da agua.
                </section> */}

                <section className="container3">
                    <div className="titulos">
                                <nav>
                    <ul>
                        <li><a className="cor-branca titulos-item" onClick={handleClick1} style={{ color: selected === event.target ? '#F80D5A' : 'white' }}>TECNOLOGIA</a></li>
                        <li><a className="cor-branca titulos-item" onClick={handleClick2} style={{ color: selected === event.target ? '#F80D5A' : 'white' }}>INOVACAO</a></li>
                        <li><a className="cor-branca titulos-item" onClick={handleClick3} style={{ color: selected === event.target ? '#F80D5A' : 'white' }}>NEGOCIOS</a></li>
                    </ul>
                    </nav>
                    </div>
                    
                    <Image src={Seta} alt="Seta FIAP" className=""/>
                    <p className="fonte-padrao cor-branca">Cursos</p>
                    <p className="fonte-padrao cor-fiap">Cursos de Curta Duracão</p>
                    
                    <span className="span-tecnologia" style={{ display: visible1 ? 'block' : 'none' }}>
                    <p className="fonte-padrao3 cor-branca">Tecnologia</p>
                        <p className="fonte-padrao4 cor-cinza">Big Data Ecosystem  REMOTO • LIVE </p><hr className="linha"></hr>
                        <p className="fonte-padrao4 cor-cinza">Creating Dashboards for BI  REMOTO • LIVE </p><hr className="linha"></hr>
                        <p className="fonte-padrao4 cor-cinza">Big Data Science - Machine Learning & Data Mining • LIVE</p> <hr className="linha"></hr>
                        <p className="fonte-padrao4 cor-cinza">Storytelling REMOTO • LIVE </p><hr className="linha"></hr>
                    </span>
                    <span className="span-inovacao" style={{ display: visible2 ? 'block' : 'none' }}>
                    <p className="fonte-padrao3 cor-branca">Inovacao</p>
                        <p className="fonte-padrao4 cor-cinza">UX DIGITAL </p><hr className="linha"></hr>
                        <p className="fonte-padrao4 cor-cinza">Creating Dashboards for BI  REMOTO • LIVE </p><hr className="linha"></hr>
                        <p className="fonte-padrao4 cor-cinza">Storytelling para Negócios • LIVE</p> <hr className="linha"></hr>
                        <p className="fonte-padrao4 cor-cinza">Chatbots • LIVE </p><hr className="linha"></hr>
                    </span>
                    <span className="span-negocios" style={{ display: visible3 ? 'block' : 'none' }}>
                    <p className="fonte-padrao3 cor-branca">Negocios</p>
                        <p className="fonte-padrao4 cor-cinza">Agile Culture • DIGITAL </p><hr className="linha"></hr>
                        <p className="fonte-padrao4 cor-cinza">DPO Data Protection Officer •LIVE </p><hr className="linha"></hr>
                        <p className="fonte-padrao4 cor-cinza">IT Business Partner • LIVE</p> <hr className="linha"></hr>
                        <p className="fonte-padrao4 cor-cinza">Perícia Forense Computacional • LIVE </p><hr className="linha"></hr>
                    </span>
                </section>
            <Footer></Footer>
            </main>
        </>
    )
}
export default Main;