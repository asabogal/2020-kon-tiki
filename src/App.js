import React from 'react'; 
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Helmet from 'react-helmet';
import Layout from './components/navigation/Layout';
import LandingPage from './pages/LandingPage';
import {CovidMenu} from './components/main/Menus';

const App = () => {
  return (
    <>
      <Helmet>
        <title>Kon-Tiki Greenport</title>
        <meta name="description" content="Kon-Tiki Restaurant and Bar at The Gallery Hotel" />
        <meta name="keywords" content="kon-tiki, kon, tiki, greenport, restaurant, bar, gallery hotel, gallery, hotel" />
      </Helmet>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path='/' component={LandingPage}/>
            <Route exact path='/menu' component={CovidMenu}/>
          </Switch>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App;
