import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Redirect, Route, Switch } from 'react-router-dom';
import React, { Fragment } from 'react';
import Layout from './components/layout/Layout';

function App() {
    return (
        <Layout>
            <Switch>
                <Route exact path="/">
                    <Redirect to='/todos' />
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;

