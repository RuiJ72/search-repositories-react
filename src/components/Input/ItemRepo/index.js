import React from 'react';
import { ItemContainer } from './styles';

function ItemRepo({ repo }) {
    return (
        <ItemContainer>
            <h3>{repo.name}</h3>
            <p>Profile: <a href={repo.profileUrl} target="_blank" rel="noopener noreferrer">{repo.profileUrl}</a></p> {/* Displaying GitHub Profile URL */}
            <hr />
            <a href={repo.url} target="_blank" rel="noopener noreferrer">Ver Repositório</a>
            <br />
            <a href="#" className='remover'>Remover</a>
        </ItemContainer>
    );
}

export default ItemRepo;
