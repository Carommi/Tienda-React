import { useState } from 'react';
import ProductoCard from './components/ProductoCard';
import { productos } from './data/productos';
import './App.css';

function App() {

  const [busqueda, setBusqueda] = useState('');

  const productosFiltrados = productos.filter(producto =>
    producto.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase())
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

      <input
        type="text"
        placeholder="Buscar producto..."
        value={busqueda}
        onChange={(evento) => {
          setBusqueda(evento.target.value);
        }}
      />

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

