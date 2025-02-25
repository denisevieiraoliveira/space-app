import { useState } from "react";
import styled from "styled-components";

import fotosPopulares from "./fotos-populares.json"
import Titulo from "../../Titulo";

const ImagensPopulares = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 24px;
    width: 212px;
    & > img {
        width: 100%;
        height: 160px;
        object-fit: cover;
        border-radius: 20px;
    }
    button {
        width: 100%;
        background: transparent;
        border: 2px solid #C98CF1;
        border-radius: 10px;
        padding: 12px;
        color: #FFF;
        font-size: 20px;
        font-family: GandhiSansBold;
        cursor: pointer;
    }
`

const Populares = () => {
    const [fotos, setFotos] = useState(fotosPopulares)

    return (
        <section>
            <Titulo alinhamento="center">Populares</Titulo>
            <ImagensPopulares>
                {fotos.map(foto => (
                    <img src={foto.path} alt={foto.titulo} />
                ))}
            <button>Ver mais</button>
            </ImagensPopulares>
        </section>
    )
}

export default Populares;