import "./style.css"
import books from "./booksData"
console.log(books)
function Books(props) {
    return (
        <>
            <input className="" type="search" placeholder="Search" />
           <div className="books-container">

            {
                books.map(book =>
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
export default Books;