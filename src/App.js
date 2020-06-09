import React, { Component } from "react";
import "antd/dist/antd.css";
import Login from "./component/login";
import Register from "./component/register";
import { Route, Switch } from "react-router-dom";
import Home from "./component/home/index";
import { connect } from "react-redux";
import { setIsLoggedIn } from "./redux/action";

class App extends Component {
  render() {
    console.log(this.props);
    const { isLoggedIn } = this.props;
    return (
      <div className="App-Container">
        {isLoggedIn ? <Home /> : <Login />}
        {/* <Home /> */}
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
  };
};

export default connect(mapStateToProps, null)(App);
