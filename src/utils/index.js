import React from 'react';

const URL_PATH = "https://gist.githubusercontent.com/bar0191/fae6084225b608f25e98b733864a102b/raw/dea83ea9cf4a8a6022bfc89a8ae8df5ab05b6dcc/pokemon.json";

export const fetchPokemons = (setPokemons) => {
    fetch(URL_PATH)
    .then(response => response.json())
    .then(data => setPokemons(data));
}

export const filterItems = ({pokemons, word}) =>
    pokemons.filter(({ Name, Types }) => {
        const lowerCaseWord = word.toLowerCase();
        const name = Name.toLowerCase();
        const includeTypes = !!Types.find((type) => {
            const lowerCaseType = type.toLowerCase();
            return lowerCaseType.includes(lowerCaseWord)
        });
        const includeName = name.includes(lowerCaseWord);

        return (includeName || includeTypes);
    }).slice(0, 4);

export const getHighlightedName = ({inputValue, name}) => {
    const lowerCaseWord = inputValue.toLowerCase();
    const lowerCaseName = name.toLowerCase();
    const matchesName = lowerCaseName.includes(lowerCaseWord);

    if (matchesName) {
        const startIndex = lowerCaseName.indexOf(lowerCaseWord);
        const start = name.substr(0, startIndex);
        const middle = name.substr(startIndex, lowerCaseWord.length);
        const last = name.substr(startIndex + lowerCaseWord.length);
        
        if (!start) {
            return <><span className="hl">{middle}</span>{last}</>;
        } else if (!last) {
            return <>{start}<span className="hl">{middle}</span></>;
        } else {
            return <>{start}<span className="hl">{middle}</span>{last}</>;
        }
    } else {
        return <>{name}</>
    }
}

