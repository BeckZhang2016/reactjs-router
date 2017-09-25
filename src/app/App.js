import React, {Component} from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import 'antd/dist/antd.min.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Routes from './routes/Routes';
import Redx from './test/redux/App';
import Root from './test/advancedRedux/Root';
import todoApp from './test/redux/reducers';

let store = createStore(todoApp);

class App extends Component {
  render() {
    return (
        <div>
          {/*<BrowserRouter>
            <div>
              {
                Routes.map((route, index) => (
                    <Route key={index} exact={route.exact} path={route.path} render={props => (
                        <route.component {...props} routes={route.routes}/>
                    )}/>
                ))
              }
            </div>
          </BrowserRouter>*/}
          {/*<Provider store={store}><Redx/></Provider>*/}
          <Root/>
        </div>
    );
  }
}

export default App;
