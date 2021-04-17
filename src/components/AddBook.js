import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { getAuthorsQuery, addBookMutation, getBooksQuery } from "../queries/queries";

function DisplayAuthors() {
    const q = useQuery(getAuthorsQuery);
    if (q.loading) {
        return (
            <option disabled>Loading Authors...</option>
        );
    } else {
        return q.data.authors.map(author => {
            return (
                <option key={ author.id } value={ author.id }>{ author.name }</option>
            );
        });
    }
}

function AddBook() {

    const [book, setBook] = useState({
        name: '',
        genre: '',
        authorId: ''
    });

    const [addBook] = useMutation(addBookMutation);

    const submitForm = e => {
        e.preventDefault();
        addBook({
            variables: {
                name: book.name,
                genre: book.genre,
                authorId: book.authorId
            },
            refetchQueries: [{ query: getBooksQuery }]
        });
    };

    const handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        book[name] = value;
        setBook(book);
    };

    return (
        <form id="add-book" onSubmit={ submitForm }>
            <div className="field">
                <label>Book name:</label>
                <input type="text" name="name" onChange={ handleChange } />
            </div>

            <div className="field">
                <label>Genre:</label>
                <input type="text" name="genre" onChange={ handleChange } />
            </div>

            <div className="field">
                <label>Author:</label>
                <select name="authorId" onChange={ handleChange }>
                    <option>Select author</option>
                    <DisplayAuthors/>
                </select>
            </div>

            <button>+</button>
        </form>
    );
}

export default AddBook;
