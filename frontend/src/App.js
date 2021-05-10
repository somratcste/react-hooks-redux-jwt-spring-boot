import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import React from 'react';
import Layout from './components/layout/Layout';
import NotFound from './pages/NotFound';
import NewQuote from './pages/quotes/NewQuote';
import QuoteDetail from './pages/quotes/QuoteDetail';
import AllQuotes from './pages/quotes/AllQuotes';

function App() {
    return ( 
        <Layout>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/quotes" />
                </Route>
                <Route exact path="/quotes" component={AllQuotes} />
                <Route exact path="/new-quote" component={NewQuote} />
                <Route exact path="/todos/:id" component={QuoteDetail} />
                <Route path="*" component={NotFound} />
            </Switch>
        </Layout>
    );
}

export default App;

