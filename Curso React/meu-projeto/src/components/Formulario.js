function Formulario() {

    function cadastrarUsuario() {
        console.log("Cadastro Realizado!")
    }

    return (
        <div>
            <h1>Meu Cadastro: </h1>
        <form onSubmit={cadastrarUsuario}>
            <div>
                <input type="text" placeholder="Digite Seu Nome"/>
            </div>
            <div>
                <input type="password" placeholder="Digite Sua Senha"/>
            </div>
            <div>
                <input type="submit" placeholder="Login"/>
            </div>
        </form>
        </div>
    )
}

export default Formulario;