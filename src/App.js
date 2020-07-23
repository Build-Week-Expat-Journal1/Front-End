import React from 'react';
<<<<<<< HEAD
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

=======
import './App.css';
<<<<<<< HEAD
import FormCreateStoryPictures from "./component/FormCreateStoryPictures"
=======
import NavBar from "./component/NavBar"
>>>>>>> 52c740be5209c820ecff014dab0e55a2c8242c51

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <FormCreateStoryPictures/>
     
  
=======
      <NavBar/>
>>>>>>> 52c740be5209c820ecff014dab0e55a2c8242c51
    </div>
  );
>>>>>>> aa338782c43c13b4d021034ba4aedb8b1a5959ad
}

export default App;


{/*Because im using Router  make sure to use /register path after localhost3006  you hae to access to the exact path in order for the forms to render 

Example: 
localhost3006/register  
localhost3006/login */}