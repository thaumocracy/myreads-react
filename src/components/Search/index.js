import React , { Component } from 'react';
import * as BooksAPI from '../../BooksAPI';
import SearchBar from "../SearchBar/index";
import SearchDisplay from "../SearchDisplay/index";
import { Link } from 'react-router-dom'
import './Search.css'

class Search extends Component {

    state = {
        books : []
    };

    searchBooks = (query) => {
        let { library } = this.props;
        console.log(library);
        if (query === '') {
            this.searchReset();
        } else {
        BooksAPI.search(query).then(books => {
            if (typeof(books) === 'undefined' || books.error === "empty query") {
                return this.searchReset();
            }

            books.map(book => {
                let bookIndex = library.findIndex(bookIn => bookIn.id === book.id);
                if (bookIndex > -1) {
                    book.shelf = library[bookIndex].shelf
                } else {
                    book.shelf = 'none';
                }
                console.log(book.shelf);
                return book

            });
            this.setState({books:books})
        })
    }
        };

    searchReset = () => {
        this.setState({books:[]})
    };

    render() {
        const { updateShelf} = this.props;
        return (
            <div>
                <SearchBar
                    searchBooks = {(query) => this.searchBooks(query)}
                />
                <SearchDisplay
                    books = {this.state.books}
                    updateShelf = {(book,newShelf) => updateShelf(book,newShelf)}
                />
                <div className="link__home">
                    <Link to='/'>Home</Link>
                </div>
            </div>
        )
    }
}

export default Search;