import styled from "styled-components";
import Titulo from "../Titulo";
import Tags from "./Tags";
import Populares from "./Populares";
import Imagem from "./Imagem";



const GaleriaContainer = styled.div`
    display: flex;
`

const SecaoFluida = styled.section`
    flex-grow: 1;
`;

const ImagensContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
`;

const Container = styled.div`
  /* Estilos para todas as telas */
  width: 100%;

  @media (min-width: 768px) {
    /* Estilos para telas a partir de 768px */
    width: 80%;
  }

  @media (min-width: 1200px) {
    /* Estilos para telas a partir de 1200px */
    width: 60%;
  }
`;

const Galeria = ({ fotos = [], aoFotoSelecionada }) => {
    return (
        <>
            <Tags />
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>Navegue pela galeria</Titulo>
                    <ImagensContainer>
                        {fotos.map((foto) => (
                            <Imagem 
                                aoZoomSolicitado={aoFotoSelecionada}
                                key={foto.id} 
                                foto={foto} 
                                expandida={false}
                            />
                        ))}
                    </ImagensContainer>
                </SecaoFluida>
                <Populares />
            </GaleriaContainer>
        </>
    );
}

export default Galeria;