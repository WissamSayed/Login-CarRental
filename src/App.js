import React, { useEffect, useState } from 'react';
import { initializeApp } from "firebase/app";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';
import CarRentals from './components/CarRentals/CarRentals' ;
import Details from './components/CarRentals/CarRental/Details/Details';
import { getAuth, onAuthStateChanged } from '@firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDwTFN81OsF1JWBh3ZteaJF5PYDMjOzpoE",
  authDomain: "sign-in-up-50afd.firebaseapp.com",
  projectId: "sign-in-up-50afd",
  storageBucket: "sign-in-up-50afd.appspot.com",
  messagingSenderId: "534497491991",
  appId: "1:534497491991:web:02954ae0f41e9a55bf7052"
};

initializeApp(firebaseConfig);

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, user => {
      setUser(user)
    })
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/CarRentals" component={CarRentals} />
          <Route path="/:number" component={Details} />


        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;