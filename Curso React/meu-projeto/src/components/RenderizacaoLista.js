

function RenderizacaoLista({itens}) {
    return (
        <>
            <h3>Lista De Coisas Boas:</h3>
            {itens.map((item) => (
                <p>{item}</p>
            ))}
        </>
    )
}

export default RenderizacaoLista;