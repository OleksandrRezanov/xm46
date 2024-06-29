import { Hero } from './components/Hero';
import './styles/reset.css';
import './App.scss';
import { About } from './components/About';
import { Services } from './components/Services';
import { Token } from './components/Token';
import { FAQs } from './components/FAQs';
import { Team } from './components/Team';
import { Blog } from './components/Blog';
import { GetStarted } from './components/GetStarted';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className='app'>
      <section className='app__hero'>
        <div className='app__wrapper'>
          <Hero />
        </div>
      </section>

      <main>
        <section className='app__about'>
          <div className='app__wrapper app__about-wrapper'>
            <About />
          </div>
        </section>

        <section className='app__services'>
          <div className='app__wrapper'>
            <Services />
          </div>
        </section>

        <section className='app__token'>
          <div className='app__wrapper'>
            <Token />
          </div>
        </section>

        <section className='app__faq'>
          <div className='app__wrapper'>
            <FAQs />
          </div>
        </section>

        <section className='app__team'>
          <div className='app__wrapper'>
            <Team />
          </div>
        </section>

        <section className='app__blog'>
          <div className='app__wrapper'>
            <Blog />
          </div>
        </section>

        <section className='app__get-started'>
          <div className='app__wrapper'>
            <GetStarted />
          </div>
        </section>
      </main>

      <footer className='app__footer'>
        <div className='app__wrapper'>
          <Footer />
        </div>
      </footer>
    </div>
  );
}

export default App;
