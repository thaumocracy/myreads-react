import React, { Component } from 'react';
import './App.css';
import * as BooksAPI from './BooksAPI';
import Shelf from "./components/Shelf/index";
import {Link , Route} from 'react-router-dom'
import Search from "./components/Search/index";

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            books : []
        };
    }


    componentDidMount(){
        BooksAPI.getAll()
            .then(books => this.setState({books}));

    }
    updateShelf(book, newShelf) {
        let books = this.state.books;
        let pickedBook = books.findIndex(currentBook => currentBook.id === book.id);
        if(pickedBook > -1 ){
           books[pickedBook].shelf = newShelf;
        } else {
            book.shelf = newShelf;
            books.push(book);
        }
        console.log('Book : ',book);
        console.log('Shelf : ',newShelf);
        BooksAPI.update(book, newShelf).then(() =>
            this.setState({books: books})
        )
    }

  render() {
      const { books } = this.state;
      let currentlyReadingBooks = books.filter(book => book.shelf === "currentlyReading");
      let wantToReadBooks = books.filter((book) => book.shelf === "wantToRead");
      let readBooks = books.filter((book) => book.shelf === "read");

    return (
        <div>
            <Route exact path = '/' render={() =>
                <main className="content">
                    <Shelf
                        title={'Currently reading'}
                        classes={'shelf'}
                        books={currentlyReadingBooks}
                        updateShelf={(book, newShelf) => this.updateShelf(book, newShelf)}
                    />
                    <Shelf
                        title={'Want to read'}
                        classes={'shelf'}
                        books={wantToReadBooks}
                        updateShelf={(book, newShelf) => this.updateShelf(book, newShelf)}
                    />
                    <Shelf
                        title={'Already read'}
                        classes={'shelf'}
                        books={readBooks}
                        updateShelf={(book, newShelf) => this.updateShelf(book, newShelf)}
                    />
                    <div className='search__link'>
                        <Link to = "/search">Add a book</Link>
                    </div>
                </main>
            } />
            <Route exact path = '/search' render={() => {
                return (
                    <Search
                        library = {books}
                        updateShelf={(book, newShelf) => this.updateShelf(book, newShelf)}
                    />
                )
            }}
            />
        </div>

    );
  }
}

export default App;
