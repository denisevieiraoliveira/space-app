import styled from "styled-components";
import ItemNavegacao from "./ItemNavegacao";

const ListaEslitizada = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 212px;
`;

const BarraLateral = () => {
    return(
        <aside>
            <nav>
                <ListaEslitizada>
                    <ItemNavegacao 
                        iconeAtivo="public/icones/home-ativo.png" 
                        iconeInativo="public/icones/home-inativo.png"
                        ativo={true}
                    >
                        Home
                    </ItemNavegacao>
                    <ItemNavegacao 
                        iconeAtivo="public/icones/mais-vistas-ativo.png" 
                        iconeInativo="public/icones/mais-vistas-inativo.png"
                        ativo={false}
                    >
                        Mais vistas
                    </ItemNavegacao>
                    <ItemNavegacao 
                        iconeAtivo="public/icones/mais-curtidas-ativo.png" 
                        iconeInativo="public/icones/mais-curtidas-inativo.png"
                        ativo={false}
                    >
                        Mais curtidas
                    </ItemNavegacao>
                    <ItemNavegacao 
                        iconeAtivo="public/icones/novas-ativo.png" 
                        iconeInativo="public/icones/novas-inativo.png"
                        ativo={false}
                    >
                        Novas
                    </ItemNavegacao>
                    <ItemNavegacao 
                        iconeAtivo="public/icones/surpreenda-me-ativo.png" 
                        iconeInativo="public/icones/surpreenda-me-inativo.png"
                        ativo={false}
                    >
                        Surpreenda-me
                    </ItemNavegacao>
                </ListaEslitizada>
            </nav>
        </aside>
    );
}

export default BarraLateral;