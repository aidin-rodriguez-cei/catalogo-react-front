import { Outlet, Link } from "react-router-dom";
import { useContext, useState } from 'react';
import { ModoOscuroContext } from './context/ModoOscuroContext';
import { CarritoProvider } from './context/CarritoContext';
import './css/catalogo.css';

// Componente Navbar
const Navbar = () => {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/carrito">Carrito</Link>
      <Link to="/checkout">Checkout</Link>
    </nav>
  );
};

// Componente Layout
const Layout = () => {
  const [tema, setTema] = useState("light");

  return (
    <ModoOscuroContext.Provider value={{ tema, setTema }}>
      <CarritoProvider>
        <div className={tema}>
          <header>
            <div className="header-content">
              <Navbar />
              <button className="theme-toggle" onClick={() => {
                setTema(tema === "dark" ? "light" : "dark");
              }}>
                Cambiar Tema: {tema}
              </button>
            </div>
          </header>

          <main>
            <Outlet />
          </main>
        </div>
      </CarritoProvider>
    </ModoOscuroContext.Provider>
  );
};

export default Layout;
