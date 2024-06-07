import {useState} from "react";

function Form2() {

    function cadastroUsuario(event) {
        event.preventDefault();
        console.log(`Email Cadastrado: ${email}`);
        console.log(`Senha Cadastrada: ${password}`)
        console.log("Cadastro Feito")
    }

    const [email, setEmail] = useState();
    const [password, setPassword] = useState()
    return (
        <div>
            <h1>Meu Cadastro Com useState</h1>
            <form onSubmit={cadastroUsuario}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" name="email" placeholder="Digite Seu Email" onChange={(event) => setEmail(event.target.value)}/>
                </div>
                <div>
                    <input type="password" placeholder="Digite Sua Senha" onChange={(event) =>setPassword(event.target.value)}/>
                </div>
                <div>
                    <input type="submit" value="Cadastar"/>
                </div>
            </form>
        </div>
    )
}

export default Form2;