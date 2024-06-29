import '../styles/GetStarted.scss';
import { Button } from './UIKit/Button';
import stackOfCoins from '../images/GetStarted/stack-of-coins.webp';

export const GetStarted = () => (
  <div className='get-started'>
    <div className='get-started__container'>
      <p className='get-started__article'>About Us</p>

      <h2 className='get-started__title'>Company Standarts</h2>

      <p className='get-started__description'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In amet amet integer
      </p>

      <div>
        <Button title='Get Started' isLarge={true} />
      </div>
    </div>

    <img className='get-started__image' src={stackOfCoins} alt='Stack of coins'/>
  </div>
);
