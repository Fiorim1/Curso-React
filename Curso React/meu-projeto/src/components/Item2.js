import PropTypes from "prop-types"

function Item2({marca, lancamento}) {
    return (
        <>
            <li>{marca} - {lancamento}</li>
        </>
    )
}

Item2.propTypes = {
    marca: PropTypes.string.isRequired, // Tem que ser OBRIGATÓRIA O TIPO DA VARIÁVEL
    lancamento: PropTypes.number,
}
export default Item2;