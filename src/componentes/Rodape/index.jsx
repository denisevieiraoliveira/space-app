import styled from "styled-components"

const FooterEstilizado = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 22px 46px;
    color: #FFF;
    background: #04244F;
    p {
        font-size: 16px;
    }
`

const ContainerRedesSociais = styled.div`
    display: flex;
    gap: 36px;
    & a:hover {
        cursor: pointer;
    }
`

const Rodape = () => {
    return(
        <FooterEstilizado>
            <ContainerRedesSociais>
                <a><img src="public/imagens/sociais/facebook.svg" alt="Ícone do facebook" /></a>
                <a><img src="public/imagens/sociais/twitter.svg" alt="Ícone do twitter" /></a>
                <a><img src="public/imagens/sociais/instagram.svg" alt="Ícone do instagram" /></a>
            </ContainerRedesSociais>
            <p>Desenvolvido por Alura.</p>
        </FooterEstilizado>
    )
}

export default Rodape 