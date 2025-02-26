import styled from "styled-components";

const TituloEstilizado = styled.h2`
  color: #7b78e5;
  font-size: 32px;
  text-align: ${(props) => (props.$alinhamento ? props.$alinhamento : "left")};
`;

const Titulo = ({ alinhamento, children }) => {
  return (
    <TituloEstilizado $alinhamento={alinhamento}>{children}</TituloEstilizado>
  );
};

export default Titulo;
