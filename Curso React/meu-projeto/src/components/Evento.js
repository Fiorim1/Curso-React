import styles from "./Evento.module.css";
import Button from "./event/Button";

function Evento({numero}) {

    function meuEvento() {
        console.log(`Gabriel Lindo ${numero}`)
    }

    return (
        <div className={styles.botaoAtivar}>
            <p>Clique Para Disparar Um Evento: </p>
            <button onClick={meuEvento}>Ativar!</button>
            <Button text="Primeiro Evento" event={meuEvento}/>
        </div>
    )
}

export default Evento;