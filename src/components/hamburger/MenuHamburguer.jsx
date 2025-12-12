import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import s from './menuHamburguer.module.scss';
import Button from '../button/Button';

const Hamburguer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className={s.hamburguerContainer}>
      {/* Botão hambúrguer */}
      <button 
        className={`${s.hamburguerButton} ${isOpen ? s.active : ''}`}
        onClick={toggleMenu}
        aria-label="Menu"
      >
        <span className={s.hamburguerLine}></span>
        <span className={s.hamburguerLine}></span>
        <span className={s.hamburguerLine}></span>
      </button>

      {/* Menu dropdown */}
      <div className={`${s.dropdownMenu} ${isOpen ? s.open : ''}`}>
        <div className={s.dropdownContent}>
          <Link 
            to='/' 
            className={s.dropdownLink}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Button 
            to='/seja-voluntario' 
            className={s.dropdownButton}
            texto='Seja Voluntário'
            onClick={closeMenu}
          />
        </div>
      </div>

      {/* Overlay para fechar ao clicar fora */}
      {isOpen && (
        <div 
          className={s.overlay}
          onClick={closeMenu}
        />
      )}
    </div>
  );
};

export default Hamburguer;