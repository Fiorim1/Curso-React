function PessoaPropsAvancado({foto, nome, idade, profissacao}) {
    return (
        <div>
            <img src={foto} alt="#" />
            <h2>Nome: {nome}</h2>
            <h2>Idade: {idade}</h2>
            <h2>Profissao: {profissacao}</h2>
        </div>
    )
}

export default PessoaPropsAvancado;