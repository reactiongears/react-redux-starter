import React, { Component } from "react";
import { Route, Link, withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { setViewWidth } from "modules/view";
import Home from "../Home/Home";
import About from "../About/About";

class App extends Component {
  componentWillMount() {
    window.addEventListener("resize", this.handleResize);
  }

  render() {
    return (
      <div>
        <header>
          <Link to="/">Home</Link>
          <Link to="/about-us">About</Link>
        </header>

        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/about-us" component={About} />
        </main>
      </div>
    );
  }
}

const mS = (state, ownProps) => ({
  isMobile: state.view.isMobile
});

const mD = dispatch =>
  bindActionCreators(
    {
      setViewWidth
    },
    dispatch
  );

export default withRouter(connect(mS, mD)(App));
