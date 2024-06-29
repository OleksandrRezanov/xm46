import '../styles/Blog.scss';
import { Button } from './UIKit/Button';
import launchCrypto from '../images/Blog/blog-image-1.webp';
import riseCrypto from '../images/Blog/blog-image-2.webp';
import secondRiseCrypto from '../images/Blog/blog-image-3.webp';

export const Blog = () => (
  <div className='blog'>
    <p className='blog__label'>Blog</p>

    <h2 className='blog__title'>Latest News & Blog</h2>

    <p className='blog__description'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo ipsum
      aliquet turpis elit elit natoque varius eget facilisi. Amet rhoncus
    </p>

    <div className='blog__items'>
      <article className='blog__item'>
        <img
          src={launchCrypto}
          alt='launchCrypto'
          className='blog__item-image'
        />

        <p className='blog__item-date'>27 August, 2023</p>

        <h3 className='blog__item-title'>
          How to Launch Your Own Cryptocurrency
        </h3>

        <div className='blog__item-button'>
          <Button title='Read More' hasArrow={true} />
        </div>
      </article>

      <article className='blog__item'>
        <img
          src={riseCrypto}
          alt='riseCrypto'
          className='blog__item-image'
        />

        <p className='blog__item-date'>27 August, 2023</p>

        <h3 className='blog__item-title'>
          The Rise of Cryptocurrency Mining in Education
        </h3>

        <div className='blog__item-button'>
          <Button title='Read More' hasArrow={true} />
        </div>
      </article>

      <article className='blog__item'>
        <img
          src={secondRiseCrypto}
          alt='secondRiseCrypto'
          className='blog__item-image'
        />

        <p className='blog__item-date'>27 August, 2023</p>

        <h3 className='blog__item-title'>
          The Rise of Cryptocurrency Mining in Education
        </h3>

        <div className='blog__item-button'>
          <Button title='Read More' hasArrow={true} />
        </div>
      </article>
    </div>
  </div>
);
