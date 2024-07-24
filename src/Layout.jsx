import { Outlet } from "react-router-dom";
// import './css/catalogo.css'

const Layout = () => {
    return ( 
        <div>
            {/* <Header /> */}
            <header>
                {/* <h1>Proyecto Catalogo</h1> */}
            </header>

            <main>
                <Outlet />
            </main>
            {/* <Footer /> */}
        </div>
     );
}
 
export default Layout;