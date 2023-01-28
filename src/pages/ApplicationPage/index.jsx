import styles from './style.module.css'
import Header from '../../components/Header'

export function ApplicationPage({setCurrentPage}) {
    return (
        <>
            <Header setCurrentPage={setCurrentPage}/>
        </>
    )
}