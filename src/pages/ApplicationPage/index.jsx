import styles from './style.module.css'
import Header from '../../components/Header'
import { Form } from '../../components/Form'

export function ApplicationPage({setCurrentPage}) {
    return (
        <>
            <Header setCurrentPage={setCurrentPage}/>
            <section>
                <Form/>
            </section>
        </>
    )
}