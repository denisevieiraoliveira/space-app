import styled from "styled-components"
import EstilosGlobais from "./componentes/EstilosGlobais";
import Cabecalho from "./componentes/Cabecalho";
import BarraLateral from "./componentes/BarraLateral";
import Banner from "./componentes/Banner";
import Galeria from "./componentes/Galeria";
import fotos from "./fotos.json";
import { useState } from "react";

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
`;

const AppContainer = styled.div`
  width: 1440px;
  max-width: 100%;
  margin: 0 auto;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const App = () => {

  const [fotosGaleria, setFotosGaleria] = useState(fotos);

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho />
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
            <Banner
              backgroundImage="src/assets/banner.png"
              texto="A galeria mais completa de fotos do espaço!"
            />
            <Galeria fotos={fotosGaleria} />
          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>
    </FundoGradiente>
  )
}

export default App
