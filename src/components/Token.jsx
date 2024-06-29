import '../styles/Token.scss';

export const Token = () => (
  <div className='token'>
    <article className='token__info'>
      <p className='token__info-label'>Our Token</p>

      <h2 className='token__info-title'>Token seal</h2>

      <p className='token__info-description'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo ipsum
        aliquet turpis elit elit natoque varius eget facilisi. Amet rhoncus
      </p>
    </article>

    <div className='token__cards'>
      <article className='token__card token__card--profit'>
        <p className='token__card-title'>Enjoy The Profit</p>

        <p className='token__card-description'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl praesent massa ullamcorper ultrices eu tortor...
        </p>
      </article>

      <article className='token__card token__card--support'>
        <p className='token__card-title'>Customer Support</p>

        <p className='token__card-description'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl praesent massa ullamcorper ultrices eu tortor...
        </p>
      </article>

      <article className='token__card token__card--confirmation'>
        <p className='token__card-title'>Confirmation</p>

        <p className='token__card-description'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl praesent massa ullamcorper ultrices eu tortor...
        </p>
      </article>
    </div>
  </div>
);
