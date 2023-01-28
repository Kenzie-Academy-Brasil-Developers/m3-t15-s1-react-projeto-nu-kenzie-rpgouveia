export const ValueList = ({valueList, removeValueFromValueList}) => {

    return (
        <section>
            <h3 className="title three bold grey">Resumo financeiro</h3>
            <ul>
                {
                    valueList.length == 0 ? (
                        <li>
                            <p className="title two bold grey" aria-label="alert">Você ainda não possui nenhum lançamento</p>
                        </li>
                    ) : (
                        valueList.map((value) => {
                            return (
                                <li key={value.id}>
                                    <p>{value.description}</p>
                                    <p>{value.type}</p>
                                    <p>{value.value}</p>
                                    <button type="submit" onClick={() => removeValueFromValueList(value.id)}>Remover</button>
                                </li>
                            )
                        })
                        
                        
                    )
                }
            </ul>
        </section>
    )
}