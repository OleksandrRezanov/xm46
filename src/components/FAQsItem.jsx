import { useState } from 'react';
import classNames from 'classnames';
import '../styles/FAQsItem.scss';

export const FAQsItem = ({ question, answer }) => {
  const [selected, setSelected] = useState(false);
  return (
    <div className='answers-item'>
      <div className='answers-item__wrapper'>
        <div
          className={classNames(
            'answers-item__icon',
            { 'answers-item__selected': selected },
          )} 
          onClick={() => setSelected(!selected)}
        />

        <p className='answers-item__title'>{question}</p>
      </div>

      {selected && (
        <p className='answers-item__answer'>
          {answer}
        </p>
      )}
    </div>
  );
};
