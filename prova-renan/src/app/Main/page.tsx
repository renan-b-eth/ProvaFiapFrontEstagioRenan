"use client"
import "./main.css";
import React, { useState, useEffect } from 'react';

const Main = () =>{

    const [opacity, setOpacity] = useState(0);
    useEffect(() => {
        setOpacity(1); 
      }, []); 

      const [translateY, setTranslateY] = useState('0%'); // Initial translateY value (100% offscreen)

      useEffect(() => {
        setTimeout(() => setTranslateY('20%')); // Animate translateY to 0% (on screen) after 500ms
      }, []);

    return(
        <>
            <main>
                <section>
                    <div className="cor-background-principal" id="centro">
                        <span class="posicao-texto">
                            <p className="fonte-padrao cor-branca index-tras position-texto-direta animacao2">A Melhor Faculdade</p>
                            <div style={{ transform: `translateY(${translateY})`, transition: 'transform 0.5s ease-in-out' }}>
                                <p className="fonte-padrao cor-branca position-fonte-tecnologia index-tras animacao">de Tecnologia</p>
                            </div>
                            <div style={{ transition: 'opacity 1s ease-in-out', opacity }}>
                                <p className="fonte-padrao-sobreposto cor-cinza index-frente animacao-header">SOBRE</p>
                            </div>
                        </span>
                    </div>
                </section>
            </main>
        </>
    )
}
export default Main;