import styles from './Header.module.css'
import logo from '../../assets/images/logo.png'

export function Header(){
  return(
    <header className={styles.header}>
    <img src={logo} alt="logotipo do ignite" />
    
    </header>
  )
}