import React from 'react';
import Book from '../Book/index'
import './searchDisplay.css'


const SearchDisplay = (props) => {
    const {books , updateShelf} = props;
    return (
        <ul className='search__display'>
            {books.map(book => (

                    <Book
                        book = { book }
                        key = {book.id}
                        updateShelf = {newShelf => updateShelf(book,newShelf)}
                    />

            ))}
        </ul>
    )
};


export default SearchDisplay