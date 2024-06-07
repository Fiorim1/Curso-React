import Item from "./Item";

function List() {
    return (
        <>
            <h1>Minha Lista: </h1>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                {/* Usar Fragments */}
                <Item marca="Ford" />
                <Item marca="Chevrolet" />
                <Item marca="Fiat" />
            </ul>
        </>
    )
}

export default List;