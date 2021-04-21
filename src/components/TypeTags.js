import React from 'react';

const TypeTags = ({types}) => {
    return <>
        {types && types.map((type, key) => 
            <span key={key} className={`type ${type.toLowerCase()}`}>{type}</span>
        )}
    </>
};

export default TypeTags;