import { useState } from 'react'
import './App.css'
import { TweetsList } from './components/TweetList'
import { tweets } from './data/tweets'
import { Outlet } from 'react-router-dom'

function App() : React.JSX.Element {
  const [count, setCount] = useState(0)

  return (
    
      <div className="layout">
        <aside className="sidebar">
          <div className="logo">Logo</div>
          <nav>
            <a href="#" className="active">Accueil</a>
            <a href="#" >Explorer</a>
            <a href="#" >Notification</a>
            <a href="#" >Messages</a>
            <a href="#" >Profil</a>
        </nav>
        <button className="post-btn">Poster</button>
        </aside>
        <main className="feed">
          <header className="feed-header">Accueil</header>
          <div className="compose">
            <div className="avatar"/>
            <div className="compose-body"/>
            <textarea placeholder="Quoi de neuf?" rows={2}/>
            <div className="compose-actions">
              <button className="post-btn small">Poster</button>
            </div>
          </div>
          <TweetsList tweets={tweets}/>
        </main>

        <aside className="right">
          <input className="search" placeholder="Rechercher"/>
          <div className="card">
            <h3>Tendances</h3>
            <h2>Top Tweet</h2>
            <p>#React pour les nuls</p>
            <p>#Vite</p>
          </div>
        </aside>
      </div>
  )
}

export default App