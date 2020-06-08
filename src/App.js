import React from 'react';
import ApolloClient from "apollo-boost"
import {ApolloProvider} from "@apollo/react-hooks"
import {Switch, Route} from "react-router-dom"

import Home from "./pages/Home"
import Pokemon from './pages/Pokemon';

function App() {

  const client = new ApolloClient({
    uri: "https://graphql-pokemon.now.sh"
  })

  return (
    <ApolloProvider client={client}>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/pokemon/:id">
            <Pokemon />
          </Route>
        </Switch>
      
    </ApolloProvider>
  );
}

export default App;
