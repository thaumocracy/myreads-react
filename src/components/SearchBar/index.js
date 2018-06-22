import React from 'react';
import './searchBar.css'



const SearchBar = (props) => {
    const {searchBooks} = props;
    return (
        <div className="search__bar__container">
            <input
                className="search__bar__input"
                type="text"
                placeholder={'Search books'}
                onChange={(event => searchBooks(event.target.value))}/>
        </div>
    )
};

export default SearchBar