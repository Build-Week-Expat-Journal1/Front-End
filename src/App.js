import React from 'react';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom'
import './App.css';
import Register from'./components/register';
import Login from'./components/login';

const App =() => {
return (

  <Router>
          <Switch>

              <Route exact path='/register' component={Register}/>    
              <Route  exact path='/login' component={Login}/>    
          </Switch>
 </Router>

)

}

export default App;


{/*Because im using Router  make sure to use /register path after localhost3006  you hae to access to the exact path in order for the forms to render 

Example: 
localhost3006/register  
localhost3006/login */}