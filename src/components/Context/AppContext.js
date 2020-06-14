import React, {useState} from "react"

const AppContext = React.createContext()

function AppProvider(props){

    const [searchMatches, setSearchMatches] = useState([])

    return(
        <AppContext.Provider value={{searchMatches, setSearchMatches}}>
            {props.children}
        </AppContext.Provider>
    )
}

export {AppProvider, AppContext}