import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import register from './components/register';
import login from './components/login';
import FormCreateStoryPictures from './components/FormCreateStoryPictures';
import NavBar from './components/NavBar';
import DisplayMap from './components/DisplayMap.js';
import PrivateRoute from './utils/PrivateRoute';
import UpdateForm from './components/UpdateForm';

import CreateStory from './components/CreateStory';


import './App.css';
import Slideshow from './components/Slideshow';

const App = () => {
  const logout = e => {
    e.preventDefault();
    localStorage.removeItem('token');
    window.location.reload(false);
  };

  return (
    <div className='App'>
      {/* <button onClick={logout}>Log Out</button> */}
      <NavBar />

      <Switch>
        <Route exact path='/Register' component={register} />
        <Route exact path='/Login' component={login} />

        <Route
        path="/stories/update/:id"
        render={() => <UpdateForm /> }
      />
        {/* <Route exact path="/" component={SlideShow} />  */}

        {/* These are the private Routes */}
        <PrivateRoute
          exact
          path='/Contribute'
          component={FormCreateStoryPictures}
        />
        <PrivateRoute exact path='/Discover' component={DisplayMap} />
        <PrivateRoute exact path='/CreateStory' component={CreateStory} />
      </Switch>
      <Slideshow />
    </div>
  );
};

export default App;
