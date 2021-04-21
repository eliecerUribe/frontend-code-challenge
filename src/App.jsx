import React, { useEffect, useState } from 'react';

import PokemonListing from './components/PokemonListing';
import { fetchPokemons, filterItems } from './utils';

import './App.css';

const App = () => {
    const [inputValue, setInputValue] = useState("");
    const [pokemons, setPokemons] = useState([]);
    const [filteredPokemons, setFilteredPokemons] = useState([]);

    useEffect(() => {
        fetchPokemons(setPokemons);

        if(pokemons.length > 0) {
            setFilteredPokemons(filterItems({ pokemons, word: inputValue }));
        }
    }, [inputValue])

    const handleOnChange = (e) => {
        const currentValue = e.target.value.trim();
        setInputValue(currentValue);
    }

    return(
        <>
            <label htmlFor="maxCP" className="max-cp">
                <input type="checkbox" id="maxCP" />
                <small>
                    Maximum Combat Points
                </small>
            </label>
            <input type="text" className="input" placeholder="Pokemon or type" onChange={handleOnChange} />
            <PokemonListing pokemons={filteredPokemons} inputValue={inputValue} />
        </>
    );
}

export default App;
