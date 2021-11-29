import { gql } from "@apollo/client";

export const QUERY_USERS = gql`
    query allUsers {
        users {
            firstName
            lastName
            userName
            email
            password
            rating
        }
    }
`;

export const QUERY_SINGLE_USER = gql`
    query singleUser($userName: String!) {
        user(userName: $userName) {
            firstName
            lastName
            userName
            email
            password
            rating
        }
    }
`;

export const QUERY_ALL_PRODUCTS = gql`
    query allProduct {
        product {
            name
            description
            image
            price
            quantity
            condition
            category
        }
    }
`;

export const QUERY_SINGLE_PRODUCT = gql`
    query singleProduct($productName: String!) {
        product(productName: $productName) {
            name
            description
            image
            price
            quantity
            condition
            category
        }
    }
`;

export const QUERY_CATEGORIES = gql`
    query categories {
        categories{
            _id
            name
            gameOrConsole
        }
    }
`;

export const QUERY_PRODUCTS = gql`
    query products($category: ID, $name: String) {
        products(category: $category, name: $name) {
            name
            description
            image
            price
            quantity
            condition
            category
        }
    }
`;

