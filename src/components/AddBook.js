import { useQuery } from "@apollo/client";
import { useState } from "react";
import { getAuthorsQuery } from "../queries/queries";

// constructor(props) {
//     super(props);
//     this.state = {
//         name: '',
//         genre: '',
//         authorId: ''
//     };
// }

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

// function submitForm(e) {
//     e.preventDefault();
//     console.log(this.state);
// };

function AddBook() {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         name: '',
    //         genre: '',
    //         authorId: ''
    //     };
    // }
    // const [name, setName] = useState('');
    // const [genre, setGenre] = useState('');
    // const [authorId, setAuthorId] = useState('');
    const [data, setData] = useState({
        name: '',
        genre: '',
        authorId: ''
    });

    const submitForm = e => {
        e.preventDefault();
        console.log(data);
    };

    const handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        data[name] = value;
        setData(data);
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
