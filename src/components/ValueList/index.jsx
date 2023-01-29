import styles from './style.module.css'
import { ValueCard } from './ValueCard'

export const ValueList = ({filteredList, removeValueFromValueList, setFilter}) => {

    return (
        <aside className={styles.aside}>
            <section className={styles.filter_section}>
                <h3 className='title three bold grey'>Resumo financeiro</h3>
                <ul className={styles.filter_options}>
                    <button
                        onClick={() => setFilter('')}
                        className={styles.filter_btn}
                    >Todos</button>
                    <button
                        onClick={() => setFilter('Entrada')}
                        className={styles.filter_btn}
                    >Entrada</button>
                    <button
                        onClick={() => setFilter('Despesa')}
                        className={styles.filter_btn}
                    >Despesa</button>
                </ul>
            </section>
            <ul className={styles.ul}>
                {
                    filteredList.length == 0 ? (
                        <li>
                            <p className="title two bold grey" aria-label="alert">Você ainda não possui nenhum lançamento</p>
                        </li>
                    ) : (
                        filteredList.map((value) => {
                            return (
                                <ValueCard value={value} removeValueFromValueList={removeValueFromValueList}/>
                            )
                        })
                    )
                }
            </ul>
        </aside>
    )
}