import styles from './style.module.css'

export const Form = () => {
    return (
        <form className={styles.form}>
            <div className={styles.form_input_1}>
                <label className={styles.form_input_label}>Descrição</label>
                <input
                    type={'text'}
                    placeholder={'Digite aqui sua descrição'}
                />
                <p>Ex: Compra de Roupas</p>
            </div>
            <div className={styles.form_input_2}>
                <div className={styles.form_input_left}>
                    <label className={styles.form_input_label}>Valor</label>
                    <input
                        type={'number'}
                    />
                    <p>R$</p>
                </div>
                <div className={styles.form_input_right}>
                    <label className={styles.form_input_label}>Tipo de Valor</label>
                    <select>
                        <option value={'entrada'}>Entrada</option>
                        <option value={'despesa'}>Despesa</option>
                    </select>
                </div>
            </div>
            <button className={styles.form_button} type='submit'>Inserir Valor</button>
        </form>
    )
}