import { Outlet } from "react-router-dom";
import './css/catalogo.css'

import { createContext, useState } from 'react'

export const ModoOscuroContext = createContext();

const Layout = () => {
    const [tema, setTema] = useState("light")

    return ( 
        <ModoOscuroContext.Provider value={{tema, setTema}}>
        <div>
            {/* <Header /> */}
            <header>
                {/* <h1>Proyecto Catalogo</h1> */}
            </header>

            <main>
                <Outlet />
            </main>

            <button onClick={()=>{
                setTema(tema=="dark"?"light":"dark");
            }}>Cambiar Tema: {tema}</button>
            {/* <Footer /> */}
        </div>
        </ModoOscuroContext.Provider>
     );
}
 
export default Layout;
