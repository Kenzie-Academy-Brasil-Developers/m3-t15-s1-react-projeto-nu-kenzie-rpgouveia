import { useState } from 'react'
import styles from './style.module.css'

export const Form = ({addValueToValueList}) => {

    const [formData, setFormData] = useState({
        description: '',
        value: '',
        type: 'Entrada'
    })
    
    function handleSubmit(event) {
        event.preventDefault()
        
        if (formData.description !== '' && formData.value !== '') {
            addValueToValueList(formData)
        } else {
            alert('Você precisa preencher os campos para enviar o formulário.')
        }

        // Reset Form
        setFormData({
            description: '',
            value: '',
            type: 'Entrada'
        })
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.form_input_1}>
                <label className={styles.form_input_label} htmlFor='description'>Descrição</label>
                <input
                    id='description'
                    type={'text'}
                    value={formData.description}
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
                        value={formData.value}
                        onChange={(event) => setFormData({...formData, value: event.target.value})}
                    />
                    <p>R$</p>
                </div>
                <div className={styles.form_input_right}>
                    <label className={styles.form_input_label} htmlFor='type'>Tipo de Valor</label>
                    <select
                        id='type'
                        value={formData.type}
                        onChange={(event) => setFormData({...formData, type: event.target.value})}
                    >
                        <option value={'Entrada'}>Entrada</option>
                        <option value={'Despesa'}>Despesa</option>
                    </select>
                </div>
            </div>
            <button className={styles.form_button} type='submit'>Inserir Valor</button>
        </form>
    )
}