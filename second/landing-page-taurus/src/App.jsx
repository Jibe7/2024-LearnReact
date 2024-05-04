import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import LoginButton from './LoginButton';
import './style/App.css';
import './style/main.css';
import './style/NavigationBar.css';

import { useMediaQuery } from 'react-responsive';
function NavigationBar() {
  const isMobile = useMediaQuery({ query: '(max-width: 930px)' });
  // const isMobile = false;
  // const isMobile = true;

  return (
    <>
      <nav className='navbar'>
        <div className="left">
          {isMobile ? 
          <div id='ocNavBar'>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
          </div> 
          : undefined}
          <h6>Taurus - Web Chat App</h6>
        </div>
        <div className="right">
            {!isMobile ? <a href="">Pour les entreprises</a> : undefined}
            {!isMobile ? <a href="">Questions fréquentes</a> : undefined}
            <LoginButton displayText={"Connexion"} look="upright" />
        </div>
      </nav>
    </>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main>
      <header>
        <NavigationBar />
      </header>
      <article>
        <section className='app-desc'>
          <h1 className='rainbow-title'></h1>
          <h2 className='catc-phrase'></h2>
          <p className="useCases"></p>
          <LoginButton displayText={"Se Connecter"} look="downleft" />
        </section>
        <section className='visual-example'>
          <img src="" alt="" />
          <div id="illustration-app" className='msg-ex'>
            <img id='illustration-prof-img' src="" alt="" className="profil-img" />
            <p id="illustration-text-content"></p>
          </div>
        </section>
      </article>
      <footer>
        <h6>Jiggle</h6>
        <p><a href="">Règles de confidentialité et conditions d'utilisation</a></p>
      </footer>
    </main>
    </>
  )
}

export default App
