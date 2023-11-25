import { Post, PostType } from './components/Post.jsx';
import { Header } from './components/Header.jsx';
import { Sidebar } from './components/Sidebar.jsx';

import styles from './App.module.css';

import './global.css';

// author: { avatar_url: string; name: string; role: string }
// publishedAt: Date
// content: string

// Desafio: -Criar uma API

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/SuayMack.png',
      name: 'PriscilaCS',
      role: 'Software Engineer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉 jane.design/doctorcare' }
    ],
    publishedAt: new Date('2023-11-20 12:13:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/octocat.png',
      name: 'octocat',
      role: 'Software Engineer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉 jane.design/doctorcare' }
    ],
    publishedAt: new Date('2023-11-23 08:13:00')
  }
]

export function App() {
  return (   
    <div>
      <Header />
      <div className={styles.wrapper}>
        
        <Sidebar />
   
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
