import '../styles/About.scss';

export const About = () => (
  <div className='about'>
    <div className='about__container'>
      <p className='about__article'>About Us</p>

      <h2 className='about__title'>Company Standarts</h2>

      <p className='about__description'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
      </p>

      <div className='about__statistic'>
        <div className='about__statistic-item'>
          <p className='about__statistic-value'>
            10M<span className='about__statistic-value--purple'>+</span>
          </p>

          <p className='about__statistic-label'>User active</p>
        </div>

        <div className='about__statistic-item'>
          <p className='about__statistic-value'>
          30<span className='about__statistic-value--purple'>+</span>
          </p>

          <p className='about__statistic-label'>Country</p>
        </div>

        <div className='about__statistic-item'>
          <p className='about__statistic-value'>
          $50M<span className='about__statistic-value--purple'>+</span>
          </p>

          <p className='about__statistic-label'>Transaction</p>
        </div>
      </div>
    </div>
  </div>
);
