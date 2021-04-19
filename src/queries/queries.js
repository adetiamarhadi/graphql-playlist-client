import gql from "graphql-tag";

const getBooksQuery = gql`{
    books {
        id
        name
    }
}`;

const getAuthorsQuery = gql`{
    authors {
        id
        name
    }
}`;

const addBookMutation = gql`
    mutation AddBook($name: String!, $genre: String!, $authorId: ID!) {
        addBook(name: $name, genre: $genre, authorId: $authorId) {
            id
            name
        }
    }
`;

const getBookQuery = gql`
    query Book($id: ID!) {
        book(id: $id) {
            id
            name
            genre
            author {
                id
                name
                age
                books {
                    name
                    id
                }
            }
        }
    }
`;

export { getBooksQuery, getAuthorsQuery, addBookMutation, getBookQuery };
