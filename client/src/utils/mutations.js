import { gql } from "@apollo/client";

// addUser
export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $userName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      userName: $userName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

// login
export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

// add product
export const ADD_PRODUCT = gql`
mutation addProduct($name: String!, $description: String!, $image: String!, $condition: String!, $price: Number!, $quantity: Number!) {
  addProduct(
    name: $name,
    description: $description,
    image: $image,
    condition: $condition,
    price: $price,
    quantity: $quantity
    ) {
      category {
        name: $category,
        gameOrConsole: $gameOrConsole

      }
    }
}
`;
