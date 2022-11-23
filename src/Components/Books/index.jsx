import "./style.css"
import books from "./booksData"
import React from "react"
console.log(books)
class Books extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchedBook : ""
        }
    }
    handleBookSearch = ({target :{value }}) => {
        this.setState({
            searchedBook: value
        })
    }
    render() {
        let filteredBooks = books.filter((book) =>
            book.title.toLowerCase().includes(this.state.searchedBook)
        );

        return (
            <>
                <input
                    onChange={this.handleBookSearch}
                    value={this.state.searchedBook}
                    type="search"
                    placeholder="Search" />
                <div className="books-container">

                    {
                        filteredBooks.map(book =>
                            <div className="book-card">
                                <img className="book-img" src={book.image} alt="image" />
                                <h2>{book.title}</h2>
                                <p>{book.author}</p>
                                <button className="buy-btn">Buy Now</button>
                            </div>
                        )
                    }
                </div>
            </>
        )
    }
}
export default Books;