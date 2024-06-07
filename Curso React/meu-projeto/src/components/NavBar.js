import styles from "./NavBar.module.css"

function NavBar() {
    return (
        <div className="nav-bar-element">
            <header className={styles.header}>
                <nav className={styles.navBar}> 
                    <div className={styles.logo}>
                        <h1>Fiorim Wizard</h1>
                    </div>
                    <div className={styles.navList}>
                        <ul className={styles.navListul}>
                            <li className={styles.navItem}><a href="" className={styles.navLink}>Home</a></li>
                            <li className={styles.navItem}><a href="" className={styles.navLink}>Projetos</a></li>
                            <li className={styles.navItem}><a href="" className={styles.navLink}>Contato</a></li>
                        </ul>
                    </div>
                    <div className={styles.loginButton}>
                        <button><a href="#">Entrar</a></button>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default NavBar;