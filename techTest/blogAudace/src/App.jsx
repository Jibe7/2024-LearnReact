import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './resetCSS.css'
import TitleHeader from './TitleHeader'
import Menu from './Menu'
import ArticleSection from './ArticleSection'

function App() {
  const [count, setCount] = useState(0)

  const articles = [
    { img_url: 'https://images.unsplash.com/photo-1705049769706-1a41ed22b39f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    article_title: 'LVMH x Têtu', 
    article_brief: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dicta facilis accusamus, ea animi quis saepe? Ratione, quas ducimus iste praesentium necessitatibus expedita rem a quasi rerum deleniti, at, quae sapiente dolores. Labore non aliquid ipsam, recusandae sapiente eveniet laborum ullam officia accusamus culpa facere, reprehenderit nesciunt doloribus praesentium incidunt!',
  link_to_article: "#" },
    { img_url: 'https://images.unsplash.com/photo-1569789010436-421d71a9fc38?q=80&w=2025&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    article_title: 'Universal Music France', 
    article_brief: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dicta facilis accusamus, ea animi quis saepe? Ratione, quas ducimus iste praesentium necessitatibus expedita rem a quasi rerum deleniti, at, quae sapiente dolores. Labore non aliquid ipsam, recusandae sapiente eveniet laborum ullam officia accusamus culpa facere, reprehenderit nesciunt doloribus praesentium incidunt!',
  link_to_article: "#" },
    { img_url: 'https://images.unsplash.com/photo-1594502225401-a9eab8b405dd?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    article_title: 'Renault', 
    article_brief: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dicta facilis accusamus, ea animi quis saepe? Ratione, quas ducimus iste praesentium necessitatibus expedita rem a quasi rerum deleniti, at, quae sapiente dolores. Labore non aliquid ipsam, recusandae sapiente eveniet laborum ullam officia accusamus culpa facere, reprehenderit nesciunt doloribus praesentium incidunt!',
  link_to_article: "#" },
  ]


  return (
    <>
      < TitleHeader page_title={"odace+ Blog"}></TitleHeader>
      < Menu></Menu>
      <div class="articles-container">
      < ArticleSection article_list={articles}/>
      </div>
    </>
  )
}

export default App
