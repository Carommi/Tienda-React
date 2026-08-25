function ProductoCard({ producto }) {
    const estado = producto.stock > 0 ? 'Disponible' : 'Agotado';

    return (
        <article className="producto-card">
            <div className="producto-id">
                #{producto.id}
            </div>

            <div className="producto-info">
                <span className="categoria">
                    {producto.categoria}
                </span>

                <h2>{producto.nombre}</h2>

                <p className="precio">
                    ${producto.precio.toLocaleString('es-CO')}
                </p>

                <p className="stock">
                    Stock disponible: <strong>{producto.stock}</strong>
                </p>
            </div>

            <span className={`estado ${producto.stock > 0 ? 'estado-disponible' : 'estado-agotado'}`}>
                {estado}
            </span>
        </article>
    );
}

export default ProductoCard;