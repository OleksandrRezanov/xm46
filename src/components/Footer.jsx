import logo from '../images/logo.svg';
import '../styles/Footer.scss';

export const Footer = () => (
  <div className='footer'>
    <div className='footer__main'>
      <div className='footer__info'>
        <img className='footer__logo' src={logo} alt="Cryptolly" />

        <p className='footer__description'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
        </p>

        <form className='footer__form'>
          <input className='footer__input' type="email" placeholder='Email Address' />
          <div className='footer__form-button' />
        </form>
      </div>

      <div className='footer__nav'>
        <ul className='footer__list'>
          <li className='footer__list-item'>About</li>
          <li className='footer__list-item'>Service</li>
          <li className='footer__list-item'>Token Sale</li>
          <li className='footer__list-item'>FAQ’s</li>
          <li className='footer__list-item'>Team</li>
          <li className='footer__list-item'>Bloq</li>
        </ul>
      </div>
    </div>

    <div className='footer__aditional'>
      <p className='footer__license'>© 2021 GPD Holdings, LLC FinCEN MSB</p>
      <p className='footer__privacy'>Privacy Policy and Terms of Service</p>
    </div>

  </div>
);
