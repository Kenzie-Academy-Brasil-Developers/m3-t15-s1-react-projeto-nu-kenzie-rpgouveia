import styles from './style.module.css'

export const TotalValue = ({filteredList}) => {
    let myTotalValue = 0

    filteredList.map(value => {
        if (value.type == 'Entrada') {
            return myTotalValue += value.value
        } else {
            return myTotalValue -= value.value
        }
    })

    return (
        myTotalValue !== 0 && (
            <section className={styles.total_value}>
                <div className={styles.total_value_flex}>
                    <h3 className={styles.total_value_title}>Valor Total:</h3>
                    <h3 className={styles.total_value_output}>$ {myTotalValue}</h3>
                </div>
                <p className={styles.total_value_text}>O valor se refere ao saldo</p>
            </section>
        )
    )
}