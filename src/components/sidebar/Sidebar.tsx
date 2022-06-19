import { PencilLine } from 'phosphor-react'
import { profileImage } from '../../data'
import { Avatar } from '../avatar/Avatar'
import styles from './Sidebar.module.css'
const background = "https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"


export function Sidebar(){
  return(
  <aside className={styles.sidebar}>
     <img className={styles.cover} src={background} alt="image" />

     <div className={styles.profile}>
      <Avatar src={profileImage}/>
      <strong>Diego Fernandes</strong>
      <span>Web Developer</span>
     </div>

    <footer>
      <a href="">
        <PencilLine size={20}/>
        Editar seu perfil
      </a>
    
    </footer>
  </aside>
  )
}