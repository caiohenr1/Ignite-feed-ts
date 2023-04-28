// styles 
import './global.css'
import styles from './App.module.css'
const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/fhaze.png',
      name: 'Eder Matumoto',
      role: 'Pai do GSS.'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋' },
      {type: 'paragraph', content: 'Acabei de subir mais uma versão do GSS. É mais uma das ideias geniais do Arlei 🚀! Ele quer integrar o plano de saúde com Pet Shop e Posto de Gasolina 🤯'},
      {type: 'link', content: '👉 gss.conemp/petshop'},
    ],
    publishedAt: new Date('2023-04-26 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://filosofiadoinicio.com/wp-content/uploads/2023/01/aristoteles.png',
      name: 'Carlão',
      role: 'Diretor & Filósofo'
    },
    content: [
      {type: 'paragraph', content: 'ô grande 👋' },
      {type: 'paragraph', content: 'Podemos fazer um encontro?'},
      {type: 'link', content: '👉 gss.conemp/encontrocomcarlao'},
    ],
    publishedAt: new Date('2023-04-28 20:00:00'),
  },
]


// components
import { Header } from "./components/Header/Header"
import { Sidebar } from './components/Sidebar/Sidebar'
import { Post } from './components/Post/Post'

export const App = () => {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}