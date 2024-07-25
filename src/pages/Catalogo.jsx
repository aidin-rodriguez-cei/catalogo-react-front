import { useEffect, useState, useContext } from "react";
import { ModoOscuroContext } from "../Layout";

const Catalogo = () => {

    const {tema, setTema} = useContext(ModoOscuroContext);


    return(
        <div>
        <h1>Estoy en Catalogo</h1>
        <h1>Catalogo({tema})</h1>
        </div>
    )
}

export default Catalogo;