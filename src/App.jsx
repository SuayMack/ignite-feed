import { Post } from './Post.jsx'
import { Header } from './components/Header.jsx'

import './global.css'

export function App() {
  return (   
    <>
      <Header />
      <Post 
        author="John Doe" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
    </>
  )
}
