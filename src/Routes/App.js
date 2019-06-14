import React from 'react';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import '../CSS/App.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCrown } from '@fortawesome/free-solid-svg-icons'
// import { register } from './serviceWorker';
//import firebase from '../database/firebaseConfig/firebaseConfig';
import MyComponent from '../components/Login/redirect';
import Salao from '../components/pages/Salao';
import Cozinha from '../components/pages/Cozinha';

//const database = firebase.firestore();

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* <h1 className="title">Burger Queen</h1> */}
          {/* <FontAwesomeIcon className="icon" icon={faCrown} size="2x" /> */}
          <Route path="/" exact component= {Login} />
          <Route path="/Register" component= {Register} />
          <Route path="/MyComponent" component= {MyComponent} />
          <Route path="/Salao" component= {Salao} />
          <Route path="/Cozinha" component= {Cozinha} />
       
        </header>
      </div>
    </Router>
  );
}

export default App;