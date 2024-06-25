"use client"
import "./header.css";
import LogoFiap from '../assets/logo-fiap.png'
import Image from "next/image";
import React, { useState, useEffect } from 'react';
import NavBar from "../NavBar/page";

const Header = () =>{

    return(
        <>
        <NavBar></NavBar>
            <main>
                <section className="cor-background">
                        <div className="logo">
                        <Image src={LogoFiap} alt="Logo FIAP" className="logo-centro efeito-logo"/>
                        </div>
                </section>
               
            </main>
        </>
    )
}
export default Header;