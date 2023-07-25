import styles from './Header.module.css'
import Logo from '../Logo/Logo'
import Navigation from '../Navigation/Navigation'

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Navigation />
    </header>
  )
}

export default Header
