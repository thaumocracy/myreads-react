import React from 'react';
import './book.css'
import ShelfChanger from "../ShelfChanger";


const Book = (props) => {
    const { book , updateShelf } = props;
    const authors = book.authors ? book.authors.join(' , ') : '';
    const image = book.imageLinks !== undefined ? book.imageLinks.thumbnail : 'http://danikadinsmore.com/wp-content/uploads/2017/06/placeholder-cover-1.jpg';
    const style = {
        width:'130px',
        height:'200px',
        textAlign:'center'
    };
    return (
        <div className="book">
            <img src={image} alt="" className="book__image" style={style}/>
            <h3 className="book__title">{book.title}</h3>
            <p className="authors">{authors}</p>
            <ShelfChanger shelf = { book.shelf || 'none' } updateShelf = {newShelf => updateShelf(newShelf)}/>
        </div>
    )
};

export default Book;