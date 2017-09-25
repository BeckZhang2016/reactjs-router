import React, {Component} from 'react';
import {Route, Switch, Link} from 'react-router-dom'

export class BodyComponent extends Component {
  render() {
    const {routes} = this.props;
    return (
        <div>
          BodyComponent
          <Link to="/main/api">show body one</Link>
          {routes.map((childRoute, index) => (
              <RouteWithSubRoutes key={index} {...childRoute}/>
          ))}
        </div>
    )
  }
}

const RouteWithSubRoutes = (route) => (
    <Route exact={route.exact} path={route.path} render={props => (
        <route.component {...props} routes={route.routes}/>
    )}/>
);
