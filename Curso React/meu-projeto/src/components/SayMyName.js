function SayMyName(props) {
    return(
        <div>
            <p>Eae {props.nome}, como você está?</p>
            <p>Hoje eu tenho {props.idade} anos</p>
        </div>
    )
}

export default SayMyName;