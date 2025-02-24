import styled from "styled-components";
import tags from "./tags.json"

const TagsContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 56px;
    margin-bottom: 40px;
`;

const TagTitulo = styled.h3`
    color: #D9D9D9;
    font-size: 24px;
    margin: 0 60px 0 0;
`;

const BotoesContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
`;

const Tag = styled.button`
    font-size: 24px;
    color: #FFF;
    cursor: pointer;
    transition: background-color 0.3s ease;
    background-color: rgba(217, 217, 217, 0.3);
    padding: 10px 8px;
    border-radius: 10px;
    border: 2px solid transparent;
    &:hover {
        border-color: #C98CF1;
    }
`;

const Tags = () => {

    const tagsOrdenadas = tags.toSorted((a, b) =>
        a.titulo < b.titulo ? -1 : a.titulo > b.titulo ? 1 : 0
    );

    return (
        <TagsContainer>
            <TagTitulo>Busque por tags:</TagTitulo>
            <BotoesContainer>
                {tagsOrdenadas.map((tag) => (
                    <Tag key={tag.id}>
                        {tag.titulo}
                    </Tag>
                ))}
            </BotoesContainer>
        </TagsContainer>
    );
}

export default Tags;