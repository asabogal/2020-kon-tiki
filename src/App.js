import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Helmet from 'react-helmet';
import LandingPage from './pages/LandingPage';

const App = () => {
  return (
    <>
      <Helmet>
        <title>Kon-Tiki Greenport</title>
        <meta name="description" content="Kon-Tiki Restaurant and Bar at The Gallery Hotel" />
        <meta name="keywords" content="kon-tiki, kon, tiki, greenport, restaurant, bar, gallery hotel, gallery, hotel" />
      </Helmet>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={LandingPage}/>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App;
