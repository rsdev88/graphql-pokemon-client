import gql from "graphql-tag"

export const GET_ALL_POKEMON = gql`
    {
        pokemons(first: 151){
            id
            name
            number
            types
            image
        }
    }
`