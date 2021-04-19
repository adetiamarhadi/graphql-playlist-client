import { useQuery } from "@apollo/client";
import { getBookQuery } from "../queries/queries";

function BookDetails(props) {
    if (!props.bookId) {
        return (
            <div>No book selected...</div>
        );
    } else {
        return (
            <div>
                <ul id="book-details">
                    <DisplayBookDetails bookId={ props.bookId }/>
                </ul>
            </div>
        );
    }
    
}

function DisplayBookDetails({bookId}) {

    
    
    const { loading, error, data } = useQuery(getBookQuery, {
        variables: {
            id: bookId
        }
    });

    if (error || !data) {
        return (
            <div>No book selected...</div>
        );
    }
    const book = data.book;
    if (data) {
        return (
            <div>
                <h2>{ book.name }</h2>
                <p>{ book.genre }</p>
                <p>{ book.author.name }</p>
                <p>All books by this author:</p>
                <ul className="other-books">
                    {
                        book.author.books.map(item => {
                            return <li key={ item.id }>{ item.name }</li>
                        })
                    }
                </ul>
            </div>
        );
    } else {
        return (
            <div>No book selected...</div>
        );
    }
}

export default BookDetails;