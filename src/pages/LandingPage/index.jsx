import styles from './style.module.css'

export function LandingPage({ setCurrentPage }) {
    return (
        <section className={styles.landingpage}>
            <div className={styles.container}>
                <div className={styles.landingpage_frame}>
                    <div className={styles.landingpage_contents}>
                        <img className={styles.landingpage_logo} src='./src/assets/NuKenzieLP.svg' alt='NuKenzie Logo'/>
                        <h1 className='title one extraBold white'>Centralize o controle das suas finanças</h1>
                        <p className='headline white'>de forma rápida e segura</p>
                        <button className={styles.landingpage_btn} onClick={() => setCurrentPage('application_page')}>Iniciar</button>
                    </div>
                    <img className={styles.landingpage_img} src='./src/assets/Illustration_desktop.png'/>
                </div>
            </div>
        </section>
    )
}