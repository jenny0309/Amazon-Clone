import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth } from "./firebase"

function App() {
  const [{ user }, dispatch] = useStateValue()

  // useEffect <<< POWERFUL
  // Piece of code which runs based on a given condition

  // set listener in the high level component to keep track of browsing history
  useEffect(() => {
    // change auth state when logging in or logging out
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // this user is logged in...
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // this user is logged out...
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })

    return () => {
      // Any cleanup operations go in here...
      unsubscribe()
    }
  }, [])

  console.log("USER IS >>> ", user)

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            {/* /checkout/:someRandomId/page */}
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>

        {/* We NEED React-ROUTER */}

        {/* / */}
        {/* /checkout */}
        {/* /login */}
      </div>
    </Router>
  );
}

export default App;
