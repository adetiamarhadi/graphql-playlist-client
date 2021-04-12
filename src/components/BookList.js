import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

const getBooksQuery = gql`{
    books {
        id
        name
    }
}`;

function BookList() {
    useQuery(getBooksQuery);
    return (
        <div>
            <ul id="book-list">
                <li>Book Name</li>
            </ul>
        </div>
    );
}

export default BookList;
