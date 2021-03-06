import { gql } from "@apollo/client";

export const CYPHER_ADDED = gql`
    subscription newCypher {
        newCypher {
            _id
        }
    }
`


export const MESSAGE_ADDED = gql `
    subscription newMessage ($cypherId: String, $messageText: String){
        newMessage (cypherId: $cypherId, messageText: $messageText) {
            username
            messageText
            createdAt
            _id
            cypherId
        }
    }
`


export const NEW_CYPHER_USER = gql` 
    subscription newCypherUser {
        newCypherUser {
            userId
        }
    }
`