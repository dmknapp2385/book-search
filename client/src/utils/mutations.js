import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
mutation addBook($bookId: String!, $title: String!, $image:String!, $link:String!, $author:[String!], $description: String!) {
    addBook(bookId: $bookId, title: $title, image: $image, link:$link, author: $author, description: $description) {
        _id
        username
        email
        bookCount
        savedBooks {
          author
          description
          image
          link
          bookId
          title
        }
    }
  } 
`;


export const REMOVE_BOOK = gql`
  mutation removeBook($bookdId: String!) {
    removeBook(bookId: $bookId) {
      _id
      username
      bookCount
  }
`;