import styled from "styled-components";
import Imagem from "../Galeria/Imagem";

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const DialogEstilizado = styled.dialog`
  position: absolute;
  top: 294px;
  background: transparent;
  padding: 0;
  border: 0;
  width: 1156px;
  display: flex;
  justify-content: center;
  form {
    button {
      position: relative;
      top: 20px;
      right: 60px;
      cursor: pointer;
    }
  }
`;

const BotaoEstilizado = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background: transparent;
  border: none;
`;

const ModalZoom = ({ foto, aoFechar, aoFavoritar }) => {
  return (
    <>
      {foto && (
        <>
          <Overlay />
          <DialogEstilizado open={!!foto} onClose={aoFechar}>
            <Imagem foto={foto} expandida={true} aoFavoritar={aoFavoritar} />
            <form method="dialog">
              <BotaoEstilizado>
                <img src="/icones/fechar.png" alt="Botão de fechar" />
              </BotaoEstilizado>
            </form>
          </DialogEstilizado>
        </>
      )}
    </>
  );
};

export default ModalZoom;
