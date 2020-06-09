import gql from "graphql-tag"

export const GET_POKEMONS = gql`
    query Pokemons($first: Int!) 
    {
        pokemons(first: $first){
            id
            name
            image
            maxHP
            attacks {
                special {
                    name
                    damage
                }
            }
        }
    }`