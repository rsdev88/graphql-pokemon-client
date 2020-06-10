import React from 'react';
import ApolloClient from "apollo-boost"
import {ApolloProvider} from "@apollo/react-hooks"
import {Switch, Route} from "react-router-dom"

import Home from "./pages/Home"
import Pokemon from './pages/Pokemon';
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"

function App() {

  const client = new ApolloClient({
    uri: "https://graphql-pokemon.now.sh"
  })

  return (
    <ApolloProvider client={client}>
        <Header />

        <main>
          <Switch>
            <Route exact path={["/", "/:page"]}>
              <Home />
            </Route>

            <Route path="/pokemon/:name">
              <Pokemon />
            </Route>
          </Switch>
        </main>

        <Footer/>
    </ApolloProvider>
  );
}

export default App;
