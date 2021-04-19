import { useQuery } from "@apollo/client";
import { useState } from "react";
import { getBooksQuery } from "../queries/queries";
import BookDetails from "./BookDetails";

function DisplayBooks({handleChange}) {

    const q = useQuery(getBooksQuery);
    if (q.loading) {
        return (
            <div>Loading Books...</div>
        );
    } else {
        return q.data.books.map(book => {
            return (
                <li key={ book.id } onClick={ () => { handleChange(book.id); } }>{ book.name }</li>
            );
        });
    }
}

function BookList() {
    const [selected, setSelected] = useState(null);
    
    const handleChange = (index) => {
        setSelected(index);
    };
    
    return (
        <div>
            <ul id="book-list">
                <DisplayBooks handleChange={handleChange}/>
            </ul>
            <BookDetails bookId={ selected }/>
        </div>
    );
}

export default BookList;
