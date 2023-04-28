import { Avatar } from '../Avatar/Avatar'
import styles from './Sidebar.module.css'
import { PencilSimpleLine } from 'phosphor-react'

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover} src="https://images.unsplash.com/photo-1558980972-3f1aae2cb0a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />

      
      <div className={styles.profile}>
        <Avatar  src='https://github.com/frostt1.png'/>
        <strong>Caio H Antonio</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilSimpleLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}