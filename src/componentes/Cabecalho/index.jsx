import styled from "styled-components";
import CampoTexto from "../CampoTexto";

const HeaderEstilizado = styled.header`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    max-width: 212px;
  }
`;

const Cabecalho = ({ filtrarPorBusca }) => {
  return (
    <HeaderEstilizado>
      <img src="public/imagens/logo.png" alt="Logotipo do SpaceApp" />
      <CampoTexto search="src/componentes/CampoTexto/search.png" filtrarPorBusca={filtrarPorBusca} />
    </HeaderEstilizado>
  );
};

export default Cabecalho;
