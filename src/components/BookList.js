import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

const getBooksQuery = gql`{
    books {
        id
        name
    }
}`;

function DisplayBooks() {
    const q = useQuery(getBooksQuery);
    if (q.loading) {
        return (
            <div>Loading Books...</div>
        );
    } else {
        return q.data.books.map(book => {
            return (
                <li key={ book.id }>{ book.name }</li>
            );
        });
    }
}

function BookList() {
    return (
        <div>
            <ul id="book-list">
                <DisplayBooks/>
            </ul>
        </div>
    );
}

export default BookList;
