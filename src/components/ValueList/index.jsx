import styles from './style.module.css'

export const ValueList = ({valueList, removeValueFromValueList}) => {

    return (
        <>
            <h3 className="title three bold grey">Resumo financeiro</h3>
            <ul>
                {
                    valueList.length == 0 ? (
                        <li>
                            <p className="title two bold grey" aria-label="alert">Você ainda não possui nenhum lançamento</p>
                        </li>
                    ) : (
                        valueList.map((value) => {
                            if (value.type == 'Entrada') {
                                return (
                                    <li key={value.id} className={styles.value_card}>
                                        <div className={styles.value_card_income} />
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
                            } else {
                                return (
                                    <li key={value.id} className={styles.value_card}>
                                        <div className={styles.value_card_expense} />
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
                        })
                        
                        
                    )
                }
            </ul>
        </>
    )
}