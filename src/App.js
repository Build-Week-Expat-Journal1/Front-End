import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import register from "./components/register";
import login from "./components/login";
import FormCreateStoryPictures from "./components/FormCreateStoryPictures";
import NavBar from "./components/NavBar";
import DisplayMap from "./components/DisplayMap.js";
import PrivateRoute from "./utils/PrivateRoute";
import CreateStory from "./components/CreateStory";
// import SlideShow from "./components/SlideShow";
import "./App.css";
import { CreateStory } from "./components/CreateStory";

const App = () => {
  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    window.location.reload(false);
  };

  return (
    <div className="App">
      {/* <button onClick={logout}>Log Out</button> */}
      <NavBar />
      {/* <SlideShow /> */}

      <Switch>
        <Route exact path="/Register" component={register} />
        <Route exact path="/Login" component={login} />
        {/* <Route exact path="/Landing" component={Landing} /> */}

        {/* These are the private Routes */}
        <PrivateRoute
          exact
          path="/Contribute"
          component={FormCreateStoryPictures}
        />
        <PrivateRoute exact path="/Discover" component={DisplayMap} />
        <PrivateRoute exact path="/CreateStory" component={CreateStory} />
      </Switch>
    </div>
  );
};

export default App;
