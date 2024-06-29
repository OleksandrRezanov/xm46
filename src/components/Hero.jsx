import { useEffect, useState } from 'react';
import logo from '../images/logo.svg';
import '../styles/Hero.scss';
import { Button } from './UIKit/Button';
import classNames from 'classnames';

export const Hero = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const burgerButtonClickHandle = () => {
    setIsBurgerMenuOpen(true);
  };

  useEffect(() => {
    if (isBurgerMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isBurgerMenuOpen]);

  return (
    <div className='hero'>
      <header className='hero__header'>
        <img className='hero__logo' src={logo} alt="Cryptolly" />

        <nav className={classNames('hero__nav', {
          'hero__nav--burger-open': isBurgerMenuOpen,
        })}>
          <div
            className='hero__nav-close-btn'
            onClick={() => setIsBurgerMenuOpen(false)}
          />
          <ul className='hero__nav-list'>
            <li className='hero__nav-item'>About</li>
            <li className='hero__nav-item'>Service</li>
            <li className='hero__nav-item'>Token Sale</li>
            <li className='hero__nav-item'>FAQ’s</li>
            <li className='hero__nav-item'>Team</li>
            <li className='hero__nav-item'>Bloq</li>
          </ul>
        </nav>

        <div className='hero__buttons'>
          <div className='hero__header-button'>
            <Button title='Get in Touch' />
          </div>

          <div
            className='hero__burger'
            onClick={burgerButtonClickHandle}
          />
        </div>
      </header>

      <h1 className='hero__title'>Own Your Crypto Adventure</h1>

      <p className='hero__description'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
      </p>

      <div>
        <Button title='Get Started' isLarge={true} />
      </div>
    </div>
  );
};
