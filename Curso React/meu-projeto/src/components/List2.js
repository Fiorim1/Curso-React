import Item2 from "./Item2";

function List2() {
    return (
        <>
            <h1>Minha Segunda Lista: </h1>
            {/* Usando propTypes */}
            <ul>
                <Item2 marca="Ford" lancamento={1985}/>
                <Item2 marca="Ferrari" lancamento={2001}/>
            </ul>
        </>
    )
}

export default List2;