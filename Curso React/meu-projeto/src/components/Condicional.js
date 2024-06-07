import { useState } from "react";

function Condicional() {

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState() // Loop IF 

    function enviarEmail(event) {
        event.preventDefault()
        setUserEmail(email)
    }

    function limparEmail() {
        setUserEmail("")
    }

    return (
        <div>
            <h2>Cadastro De Email</h2>
            <form>
                <input type="email" placeholder="Digite Seu Email" onChange={(event) => setEmail(event.target.value)}/>
                <button type="submit" onClick={enviarEmail}>Enviar Email</button>
                {userEmail && (
                    <div>
                        <p>OLa</p>
                        <button onClick={limparEmail}>Limpar</button>
                    </div>
                )}
            </form>
        </div>
    )
}

export default Condicional;