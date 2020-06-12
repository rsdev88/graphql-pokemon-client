export default function getIconName(type){
    if (!type) return "question"

    switch (type.toLowerCase()){
        case "grass":
            return "leaf"
        case "poison": 
            return "skull-crossbones"
        case "fire":
            return "fire"
        case "flying":
            return "feather-alt"
        case "water":
            return "tint"
        case "bug":
            return "bug"
        case "normal":
            return "circle"
        case "electric":
            return "bolt"
        case "ground":
            return "paw"
        case "fairy":
            return "magic"
        case "fighting":
            return "fist-raised"
        case "psychic":
            return "hat-wizard"
        case "rock":
            return "dice-d20"
        case "steel":
            return "cogs"
        case "ice":
            return "snowflake"
        case "ghost":
            return "ghost";
        case "dragon":
            return "dragon"
        case "dark": 
            return "moon"
        default:
            return "question"
    }
}