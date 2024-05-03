import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './style/App.css'
import './style/main.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main>
      <header></header>
      <article>
        <section className='app-desc'>
          <h1 className='rainbow-title'></h1>
          <h2 className='catc-phrase'></h2>
          <p className="useCases"></p>
          <button className="login"></button>
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
