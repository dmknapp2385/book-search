const { gql } = require('apollo-server-express');

const typeDefs = gql`
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

    type Query {
        me: User
        books: [Book]
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addBook(bookId: ID!): Book
        removeBook(bookId:ID!): Book
    }   
`;

module.exports = typeDefs;