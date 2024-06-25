"use client"
import "./navbar.css";
import { Link } from 'react-scroll';
import LogoFiap from '../assets/logo-fiap.png'
import Image from "next/image";
import React, { useState, useEffect } from 'react';

const NavBar = () =>{
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
  
    return (
        
        <header className={scrolled ? 'nav scrolled' : 'nav'}>
        <nav>
          <ul>
            {/* links */}
          </ul>
        </nav>
      </header>
    );
}
export default NavBar;