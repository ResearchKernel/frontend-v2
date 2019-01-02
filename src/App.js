import React from "react";
import { withRouter, Switch, NavLink as Link, Route } from "react-router-dom";
import loadable from "react-loadable";

// loading view
const LoadingComponent = () => <div />;

const HomeComponent = loadable({
  loader: () => import("./views/home/home.view"),
  loading: LoadingComponent
});

// about component
const AboutComponent = loadable({
  loader: () => import("./views/about-us/about-us.view"),
  loading: LoadingComponent
});

// contact component
const ContactComponent = loadable({
  loader: () => import("./views/contact-us/contact-us.view"),
  loading: LoadingComponent
});

function App() {
  return (
    <div className="content">
      <div className="menu">
        <Link exact to="/" activeClassName="active">
          Home
        </Link>
        <Link to="/about" activeClassName="active">
          About
        </Link>
        <Link to="/contact" activeClassName="active">
          Contact
        </Link>
      </div>
      <Switch>
        <Route exact path="/" component={HomeComponent} />
        <Route path="/about" component={AboutComponent} />
        <Route path="/contact" component={ContactComponent} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
