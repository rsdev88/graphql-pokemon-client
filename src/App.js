import React from 'react';
import ApolloClient from "apollo-boost"
import {ApolloProvider} from "@apollo/react-hooks"
import {Switch, Route} from "react-router-dom"

import Home from "./pages/Home"
import Pokemon from './pages/Pokemon/Pokemon'
import Results from "./pages/Results/Results"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"

function App() {

  const client = new ApolloClient({
    uri: "https://graphql-pokemon2.vercel.app/"
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

            <Route path="/searchresults/:searchTerm">
              <Results />
            </Route>
          </Switch>
        </main>

        <Footer/>
    </ApolloProvider>
  );
}

export default App;
