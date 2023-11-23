import { Post } from './Post.jsx'
import { Header } from './components/Header.jsx'


import styles from './App.module.css'
import './global.css'
import { Sidebar } from './components/Sidebar.jsx'

export function App() {
  return (   
    <div>
      <Header />
      <div className={styles.wrapper}>
        
        <Sidebar />
   
        <main>
          <Post 
            author="John Doe" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
          <Post 
            author="John Doe" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
        </main>
      </div>
    </div>
  )
}
