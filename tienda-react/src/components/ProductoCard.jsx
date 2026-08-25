function ProductoCard({ producto }) {

    const {
        nombre,
        precio,
        categoria,
        stock
    } = producto;

    const estado = stock > 0
        ? 'Disponible'
        : 'Agotado';

    const mostrarProducto = () => {
        alert(`Seleccionaste ${nombre}`);
    };

    return (
        <article className="producto-card">

            <div className="producto-id">
                #{producto.id}
            </div>

            <div className="producto-info">

                <span className="categoria">
                    {categoria}
                </span>

                <h2>{nombre}</h2>

                <p className="precio">
                    ${precio.toLocaleString('es-CO')}
                </p>

                <p className="stock">
                    Stock disponible: <strong>{stock}</strong>
                </p>

            </div>

            <span
                className={
                    `estado ${stock > 0
                        ? 'estado-disponible'
                        : 'estado-agotado'
                    }`
                }
            >
                {estado}
            </span>

            <button
                className="boton-producto"
                onClick={mostrarProducto}
                disabled={stock === 0}
            >
                {stock > 0 ? 'Ver producto' : 'Agotado'}
            </button>

        </article>
    );
}

export default ProductoCard;