function Saudacao({name}) {
    
    function gerarSaudacao(algumNome) {
        return `Olá, ${algumNome}.. Tudo bem?`
    }

    return (
        <div>
            {name && <p>{gerarSaudacao(name)}</p>}
        </div>
    )
}

export default Saudacao;