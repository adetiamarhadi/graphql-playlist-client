import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

const getAuthorsQuery = gql`{
    authors {
        id
        name
    }
}`;

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
    return (
        <form id="add-book">
            <div className="field">
                <label>Book name:</label>
                <input type="text" />
            </div>

            <div className="field">
                <label>Genre:</label>
                <input type="text" />
            </div>

            <div className="field">
                <label>Author:</label>
                <select>
                    <option>Select author</option>
                    <DisplayAuthors/>
                </select>
            </div>

            <button>+</button>
        </form>
    );
}

export default AddBook;
