import { useState } from 'react'
import styles from './style.module.css'

export const Form = () => {

    const [formData, setFormData] = useState({
        description: '',
        value: '',
        type: 'entrada'
    })

    function handleSubmit(event) {
        event.preventDefault()
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.form_input_1}>
                <label className={styles.form_input_label} htmlFor='description'>Descrição</label>
                <input
                    id='description'
                    type={'text'}
                    placeholder={'Digite aqui sua descrição'}
                    onChange={(event) => setFormData({...formData, description: event.target.value})}
                />
                <p>Ex: Compra de Roupas</p>
            </div>
            <div className={styles.form_input_2}>
                <div className={styles.form_input_left}>
                    <label className={styles.form_input_label} htmlFor='value'>Valor</label>
                    <input
                        id='value'
                        type={'number'}
                        onChange={(event) => setFormData({...formData, value: event.target.value})}
                    />
                    <p>R$</p>
                </div>
                <div className={styles.form_input_right}>
                    <label className={styles.form_input_label} htmlFor='type'>Tipo de Valor</label>
                    <select
                        id='type'
                        onChange={(event) => setFormData({...formData, type: event.target.value})}
                    >
                        <option value={'entrada'}>Entrada</option>
                        <option value={'despesa'}>Despesa</option>
                    </select>
                </div>
            </div>
            <button className={styles.form_button} type='submit'>Inserir Valor</button>
        </form>
    )
}