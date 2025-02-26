import styled from "styled-components";
import EstilosGlobais from "./componentes/EstilosGlobais";
import Cabecalho from "./componentes/Cabecalho";
import BarraLateral from "./componentes/BarraLateral";
import Banner from "./componentes/Banner";
import Galeria from "./componentes/Galeria";
import fotos from "./fotos.json";
import { useEffect, useState } from "react";
import ModalZoom from "./componentes/ModalZoom";
import Rodape from "./componentes/Rodape";

const FundoGradiente = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
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
  margin-bottom: 70px;
`;

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const App = () => {
  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos);
  const [fotoSelecionada, setFotoSelecionada] = useState(null);

  const [tagId, setTagId] = useState(0);
  const [busca, setBusca] = useState("");

  const scrollToTop = () => {
    window.scrollTo({ top: 250, left: 0, behavior: "smooth" });
  };

  const aoFotoSelecionada = (foto) => {
    scrollToTop();
    setFotoSelecionada(foto);
  };

  const aoFavoritar = (foto) => {
    if (foto.id === fotoSelecionada?.id) {
      setFotoSelecionada({
        ...fotoSelecionada,
        favorito: !fotoSelecionada.favorito,
      });
    }
    setFotosDaGaleria(
      fotosDaGaleria.map((fotoDaGaleria) => {
        return {
          ...fotoDaGaleria,
          favorito:
            fotoDaGaleria.id === foto.id
              ? !foto.favorito
              : fotoDaGaleria.favorito,
        };
      })
    );
  };

  const filtrarPorTag = (id) => {
    setTagId(id)    
  };

  useEffect(() => {
    tagId === 0
    ? setFotosDaGaleria(fotos)
    : setFotosDaGaleria(fotos.filter((foto) => foto.tagId === tagId))
  }, [tagId]);

  const filtrarPorBusca = (evento) => {
    setBusca(evento.target.value);
  };  

  useEffect(() => {
    setFotosDaGaleria(fotos.filter((foto) => foto.titulo.includes(busca)))
  }, [busca])

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho filtrarPorBusca={filtrarPorBusca} />
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
            <Banner
              backgroundImage="/imagens/banner.png"
              texto="A galeria mais completa de fotos do espaço!"
            />
            <Galeria
              aoFotoSelecionada={(foto) => aoFotoSelecionada(foto)}
              aoFavoritar={aoFavoritar}
              filtrarPorTag={filtrarPorTag}
              fotos={fotosDaGaleria}
            />
          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>
      <Rodape />
      <ModalZoom
        foto={fotoSelecionada}
        aoFechar={() => setFotoSelecionada(null)}
        aoFavoritar={aoFavoritar}
      />
    </FundoGradiente>
  );
};

export default App;
