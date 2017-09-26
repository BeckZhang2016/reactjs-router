import React, {Component} from 'react';

import 'antd/dist/antd.min.css';

import {BrowserRouter, Route} from 'react-router-dom';
import Routes from './routes/Routes';

class App extends Component {
  render() {
    return (
        <div>
          <BrowserRouter>
            <div>
              {
                Routes.map((route, index) => (
                    <Route key={index} exact={route.exact} path={route.path} render={props => (
                        <route.component {...props} routes={route.routes}/>
                    )}/>
                ))
              }
            </div>
          </BrowserRouter>
        </div>
    );
  }
}

export default App;
