import styled from "styled-components";
import Imagem from "../Galeria/Imagem";

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`

const DialogEstilizado = styled.dialog`
    position: absolute;
    top: 294px;
    padding: 0; 
    background: transparent;
    border: none;
    & > figure {
        width: 1156px;
        position: relative;
    }
`

const BotaoEstilizado = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    background: transparent;
    border: none;
`

const ModalZoom = ({ foto }) => {
    return (
        <>
            {foto && <>
                <DialogEstilizado open={!!foto}>
                    <Overlay />
                    <Imagem
                        foto={foto}
                        expandida={true}
                    />
                    <form method="dialog">
                        <BotaoEstilizado><img src="public/icones/fechar.png" alt="Botão de fechar" /></BotaoEstilizado>
                    </form>
                </DialogEstilizado>
            </>}
        </>
    );
}

export default ModalZoom;