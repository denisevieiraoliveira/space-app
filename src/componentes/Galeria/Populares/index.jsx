import { useState } from "react";
import styled from "styled-components";

import fotosPopulares from "./fotos-populares.json"
import Titulo from "../../Titulo";

const ColunaFotos = styled.section`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const ImagemPopular = styled.img`
    max-width: 212px;
    height: 160px;
    object-fit: cover;
    border-radius: 20px;
`

const Botao = styled.button`
    width: 100%;
    background: transparent;
    border: 2px solid #C98CF1;
    border-radius: 10px;
    padding: 12px 20px;
    color: #FFF;
    font-size: 20px;
    font-family: GandhiSansBold;
    cursor: pointer;
    max-width: 212px;
    margin-top: 16px;
`

const Populares = () => {
    const [fotos, setFotos] = useState(fotosPopulares)

    return (
        <section>
            <Titulo alinhamento="center">Populares</Titulo>
            <ColunaFotos>
                {fotos.map(foto => (
                    <ImagemPopular key={foto.id} src={foto.path} alt={foto.titulo} />
                ))}
            </ColunaFotos>
            <Botao>Ver mais</Botao>
        </section>
    )
}

export default Populares;