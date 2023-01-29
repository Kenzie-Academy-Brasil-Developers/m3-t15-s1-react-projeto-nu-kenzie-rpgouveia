import styles from './style.module.css'
import { ValueCard } from './ValueCard'

export const ValueList = ({valueList, removeValueFromValueList}) => {

    return (
        <aside className={styles.aside}>
            <h3 className='title three bold grey'>Resumo financeiro</h3>
            <ul className={styles.ul}>
                {
                    valueList.length == 0 ? (
                        <li>
                            <p className="title two bold grey" aria-label="alert">Você ainda não possui nenhum lançamento</p>
                        </li>
                    ) : (
                        valueList.map((value) => {
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