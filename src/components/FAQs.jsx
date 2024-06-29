import '../styles/FAQs.scss';
import { FAQsItem } from './FAQsItem';
import { FAQData } from '../variables/FAQData';

const leftColumnData = FAQData.slice(0, Math.ceil(FAQData.length / 2));
const rightColumnData = FAQData.slice(Math.ceil(FAQData.length / 2));

export const FAQs = () => (
  <div className='questions'>
    <p className='questions__label'>FAQ’s</p>

    <h2 className='questions__title'>Frequently Asked Questions</h2>

    <p className='questions__description'>
      When an unknown printer took a galley of type and scrambled it to make a type specimen book.
    </p>

    <div className='questions__wrapper'>
      <div className='questions__body'>
        {leftColumnData.map(({ question, answer }) => (
          <div key={question}>
            <FAQsItem question={question} answer={answer}/>
          </div>
        ))}
      </div>

      <div className='questions__body'>
        {rightColumnData.map(({ question, answer }) => (
          <div key={question}>
            <FAQsItem question={question} answer={answer}/>
          </div>
        ))}
      </div>
    </div>
  </div>
);
