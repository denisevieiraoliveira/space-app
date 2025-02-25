import styled from "styled-components";

const Figure = styled.figure`
    width: ${(props) => (props.$expandida ? '90%' : '460px')};
    max-width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    position: relative;
    & > img {
        max-width: 100%;
        border-radius: 20px;
        position: relative;
    }
    figcaption {
        width: 100%;
        background-color: #001634;
        border-radius: 0px 0px 20px 20px;
        color: white;
        box-sizing: border-box;
        padding: 12px 20px;
        position: absolute;
        left: 0;
        bottom: 0;
        h3 {
            font-family: 'GandhiSansBold';
        }
        h4 {
            flex-grow: 1;
        }
        h3, h4 {
            margin: 0;
            font-size: 18px;
        }
    }
`;

const Rodape = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const BotaoIcone = styled.button`
    background: transparent;
    border: none;
    img {
        width: 24px;
    }
`;

const Imagem = ({ foto, expandida=false }) => {
    return (
        <Figure id={`foto-${foto.tagId}`} $expandida={expandida}>
            <img src={foto.path} alt={foto.titulo} />
            <figcaption>
                <h3>{foto.titulo}</h3>
                <Rodape>
                    <h4>{foto.fonte}</h4>
                    <BotaoIcone>
                        <img src="public/icones/favorito.png" alt="Botão de favorito" />
                    </BotaoIcone>
                    {!expandida && <BotaoIcone aria-hidden={expandida}>
                        <img src="public/icones/expandir.png" alt="Botão de expandir" />
                    </BotaoIcone>}
                </Rodape>
            </figcaption>
        </Figure>
    );
}

export default Imagem;