import React from 'react';
import Book from "../Book/index";
import './shelf.css'

const Shelf = (props) => {
    const { books , updateShelf , classes , title} = props;
    return (
        <section>
            <h2 className='shelf__title'>{title}</h2>
            <ul className={classes}>
                {books.map(book => (
                    <Book
                    book = { book }
                    key = {book.id}
                    updateShelf = {newShelf => updateShelf(book,newShelf)}
                />))}
            </ul>
        </section>
    )
};



export default Shelf;