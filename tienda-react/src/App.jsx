function App() {
  const nombre = 'Laura';
  const ficha = 3409609;

  return (
    <main>
      <h1>Hola {nombre}</h1>
      <p>Ficha {ficha}</p>
    </main>
  );
}

import ProductoCard from './ProductoCard';
import { productos } from './productos';

function App() {
  return (
    <main>
      <h1>Tienda tecnológica</h1>
      {productos.map(producto => (
        <ProductoCard
          key={producto.id}
          producto={producto}
        />
      ))}
    </main>
  );
}

export default App;

