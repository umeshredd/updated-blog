import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";

import { Provider } from "react-redux";
import store from "./store/store";
import PostForm from "./components/blog/PostForm";
import Main from "./Main";
import "./App.css";
const App = () => {
  return (
    <div>
      <Router>
        <Provider store={store}>
          <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            className="switch-wrapper"
          >
            <Route exact path="/" component={Main} />
            <Route path="/PostForm" component={PostForm} />
          </AnimatedSwitch>
        </Provider>
      </Router>
    </div>
  );
};
export default App;
