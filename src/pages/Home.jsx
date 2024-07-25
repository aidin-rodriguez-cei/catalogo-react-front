import { useState, useEffect } from "react";
import '../css/catalogo.css';

const Home = () => {

    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [maxPrice, setMaxPrice] = useState("");

    useEffect(() => {
        getProductos('/backend/API/productos.json');
        console.log("Cargando datos");
    }, []);

    const getProductos = async (url) => {
        try {
            const respuesta = await fetch(url);
            const objeto = await respuesta.json();
            console.log("Objeto vale: ", objeto);
            setProducts(objeto.productos);

        } catch (e) {
            console.log("Upsi tenemos un error:", e);
        }
    }

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handlePriceFilter = (event) => {
        setMaxPrice(event.target.value);
    };

    const filteredProducts = products.filter(producto => {
        const matchesSearchTerm = producto.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
            producto.efecto.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesPrice = maxPrice === "" || producto.precio <= parseFloat(maxPrice);
        return matchesSearchTerm && matchesPrice;
    });

    return (
        <div>
        <h1>Catalogo</h1>
        <div className="search-container">
            <input
                type="text"
                placeholder="Buscar por nombre o efecto"
                value={searchTerm}
                onChange={handleSearch}
            />
            <input
                type="number"
                placeholder="Precio máximo"
                value={maxPrice}
                onChange={handlePriceFilter}
            />
        </div>
        <div className="catalog-container">
            {filteredProducts.map((producto) => (
                <DatosProductos key={producto.id} {...producto} />
            ))}
        </div>
    </div>
);
};

const DatosProductos = ({ id, nombre, efecto, duracion, precio, stock, imagenUrl }) => {
    return (
        <article className="producto">
            <p>{nombre}</p>
            <p>Efecto: {efecto}</p>
            <p>Duracion: {duracion}</p>
            <p>Precio: {precio}</p>
            <p>Stock: {stock}</p>
            <img src={imagenUrl} alt={nombre} />
        </article>
    );
};

export default Home;
