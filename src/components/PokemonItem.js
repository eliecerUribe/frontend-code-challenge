import React from 'react';

import TypeTags from './TypeTags';
import { getHighlightedName } from '../utils';

const PokemonItem = ({pokemon, inputValue}) => (
    <div>
        <img src={pokemon.img} alt="" />
        <div className="info">
            <h1>
                {getHighlightedName({inputValue, name: pokemon.Name})}
            </h1>
            <TypeTags types={pokemon.Types} />
        </div>
    </div>
);

export default PokemonItem;