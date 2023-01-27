import styles from './style.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <div className='container'>
                <div className={styles.header_menu}>
                    <img className={styles.header_img} src='./src/assets/NuKenzie.svg' alt='NuKenzie Logo' />
                    <button className={styles.header_btn} type='submit'>Início</button>
                </div>
            </div>
        </header>
    )
}

export default Header