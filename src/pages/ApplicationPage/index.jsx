import { useState } from 'react'
import { v4 as uuid} from "uuid"
import styles from './style.module.css'
import Header from '../../components/Header'
import { Form } from '../../components/Form'
import { ValueList } from '../../components/ValueList'

export function ApplicationPage({setCurrentPage}) {

    const [valueList, setValueList] = useState([])
    
    // Callbacks
    function addValueToValueList(formData) {
        const newValue = {...formData, id: uuid()}
        setValueList([...valueList, newValue])
    }

    function removeValueFromValueList(valueToBeRemoved) {
        if (confirm('Você realmente deseja remover este valor?')) {
            const filteredValuesList = valueList.filter((value) => {
                return value.id !== valueToBeRemoved
            })
            setValueList([...filteredValuesList])
        }
    }

    return (
        <>
            <Header setCurrentPage={setCurrentPage}/>
            <section>
                <div>
                    <Form addValueToValueList={addValueToValueList}/>
                    <></>
                </div>
                <ValueList valueList={valueList} removeValueFromValueList={removeValueFromValueList}/>
            </section>
        </>
    )
}