import gql from "graphql-tag"

export const GET_POKEMON = gql`

    query Pokemon($name: String) 
    {
        pokemon(name: $name){
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
            image
        }
    }
`