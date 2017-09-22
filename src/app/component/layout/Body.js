import React, {Component} from 'react';
import {Route} from 'react-router-dom'

export class BodyComponent extends Component{
  render(){
    return (
        <div>
          BodyComponent
          {this.props.routes.map((childRoute, index)=>(
              <RouteWithSubRoutes key={index} {...childRoute}/>
          ))}
        </div>
    )
  }
}

const RouteWithSubRoutes = (route) => (
    <Route exact={route.exact} path={route.path} render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes}/>
    )}/>
);
