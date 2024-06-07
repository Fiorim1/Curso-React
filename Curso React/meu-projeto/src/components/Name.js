function Name({setName}) {
    return (
        <div>
            <p>Digite Seu Nome:</p>
            <input type="text" placeholder="Qual é o seu nome?" onChange={(event) => setName(event.target.value)}/>
        </div>
    )
}

export default Name;