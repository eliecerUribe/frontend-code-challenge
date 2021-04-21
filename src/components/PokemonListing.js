import React from 'react';

import PokemonItem from './PokemonItem';
import EmptyItem from './EmptyItem';

const PokemonListing = ({pokemons, inputValue}) => (
    <div className="suggestions">
        {(pokemons.length > 0 && !!inputValue) ? 
            (pokemons.map((pokemon, key) => 
                <PokemonItem key={key} pokemon={pokemon} inputValue={inputValue} />
            )
            ) : <EmptyItem />
        }
    </div>
);

export default PokemonListing;