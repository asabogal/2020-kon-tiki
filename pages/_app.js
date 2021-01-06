import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { createGlobalStyle } from 'styled-components'
import Layout from '../components/navigation/Layout';
import Helmet from 'react-helmet';
// context
import AuthContext from '../context/auth';

const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    background-color: #f3ede6;
    color: #262929;
    font-family: 'Yanone Kaffeesatz', sans-serif;
    letter-spacing: 0.8px;
  }

  code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

h1 {
  font-size: 70px;
}

h2 {
  font-size: 30px;
}
`;

const App = ({ Component, pageProps }) => {

  const router = useRouter();
  const adminPath = router.pathname.split('/')[1];
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const authenticated = window.localStorage.getItem('isLoggedIn');
    authenticated ? setIsLoggedIn(true) : setIsLoggedIn(false);
  }, []);

  const login = () => {
    window.localStorage.setItem('isLoggedIn', true);
    setIsLoggedIn(true);
  };

  const logout = () => { 
    window.localStorage.setItem('isLoggedIn', false);
    setIsLoggedIn(false);
  };

  return (
    <>
      <Helmet>
        <title>Kon-Tiki Greenport</title>
        <meta name="description" content="Kon-Tiki Restaurant and Bar at The Gallery Hotel" />
        <meta name="keywords" content="kon-tiki, kontiki, kontiki-gp, kontiki greenport, kon-tiki grenport, kon, tiki, greenport, restaurant, bar, gallery hotel, gallery, hotel" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&family=Yanone+Kaffeesatz:wght@200;300;400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>
      <GlobalStyle />
      <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
        {
          adminPath !== 'admin' ?
            <Layout>
              <Component {...pageProps} />
            </Layout>
            :
            <Component {...pageProps} />
        }
      </AuthContext.Provider>
    </>
  )
}

export default App;
