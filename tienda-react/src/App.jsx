import ProductoCard from './components/ProductoCard';
import { productos } from './data/productos';
import './App.css';

function App() {
  // Productos disponibles
  const disponibles = productos.filter(producto => producto.stock > 0);

  // ¿Existe algún producto agotado?
  const hayAgotados = productos.some(producto => producto.stock === 0);

  // Valor total del inventario
  const valorInventario = productos.reduce(
    (total, producto) => total + producto.precio * producto.stock,
    0
  );

  return (
    <main className="contenedor">

      <header className="encabezado">
        <p className="etiqueta">TECNOLOGÍA</p>
        <h1>Tienda tecnológica</h1>
        <p className="descripcion">
          Encuentra los mejores productos para complementar tu espacio tecnológico.
        </p>
      </header>

      <section className="resumen">
        <div className="resumen-card">
          <span>Productos disponibles</span>
          <strong>{disponibles.length}</strong>
        </div>

        <div className="resumen-card">
          <span>Valor del inventario</span>
          <strong>${valorInventario.toLocaleString('es-CO')}</strong>
        </div>

        <div className="resumen-card">
          <span>Estado del inventario</span>
          <strong className={hayAgotados ? 'agotado' : 'disponible'}>
            {hayAgotados ? 'Hay productos agotados' : 'Todo disponible'}
          </strong>
        </div>
      </section>

      {/* Todos los productos */}
      <section className="seccion">
        <div className="titulo-seccion">
          <h2>Todos los productos</h2>
          <span>{productos.length} productos</span>
        </div>

        <div className="productos">
          {productos.map(producto => (
            <ProductoCard
              key={producto.id}
              producto={producto}
            />
          ))}
        </div>
      </section>

      {/* Segunda sección: solamente disponibles */}
      <section className="seccion disponibles-seccion">
        <div className="titulo-seccion">
          <h2>Productos disponibles</h2>
          <span>{disponibles.length} disponibles</span>
        </div>

        <div className="productos">
          {disponibles.map(producto => (
            <ProductoCard
              key={producto.id}
              producto={producto}
            />
          ))}
        </div>
      </section>

    </main>
  );
}

export default App;

