import styles from './style.module.css'

export const ValueCard = ({value, removeValueFromValueList}) => {
    return (
        <li key={value.id} className={styles.value_card}>
            {
                value.type == 'Entrada'? (
                    <div className={styles.value_card_income} />
                ) : (
                    <div className={styles.value_card_expense} />
                )
            }
            <div className={styles.value_card_frame}>
                <div className={styles.value_card_info}>
                    <h3 className={styles.value_card_title}>{value.description}</h3>
                    <p className={styles.value_card_text}>{value.type}</p>
                </div>
                <div className={styles.value_card_flex}>
                    <p className={styles.value_card_text}>R$ {value.value},00</p>
                    <button
                        type="submit"
                        onClick={() => removeValueFromValueList(value.id)}
                        className={styles.value_card_remove_btn}
                    />
                </div>
            </div>
        </li>
    )
}