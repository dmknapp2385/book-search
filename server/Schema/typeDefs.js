const { gql } = require('apollo-server-express');

const typeDefs = gql`
    Put quieries, mutations and type definitions here
    type User {
        _id: ID
        username: String
        email: String
        savedBooks: [Book]
    }

    type Book {
        author: String
        description: String
        bookId: ID
        image: String
        link: String
        title: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type query {
        me: User
        books: [Book]
        savedBooks: [Book]
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addBook(bookId: ID): Book
    }   
`;

module.exports = typeDefs;