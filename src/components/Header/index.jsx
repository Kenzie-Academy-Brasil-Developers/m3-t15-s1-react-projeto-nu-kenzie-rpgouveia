import styles from './style.module.css'
import NuKenzie from '/src/assets/NuKenzie.svg'

function Header({setCurrentPage}) {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.header_menu}>
                    <img className={styles.header_img} src={NuKenzie} alt='NuKenzie Logo' />
                    <button className={styles.header_btn} type='submit' onClick={() => setCurrentPage('')}>Início</button>
                </div>
            </div>
        </header>
    )
}

export default Header