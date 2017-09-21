import React, {Component} from 'react';
import 'antd/dist/antd.min.css';
import {BrowserRouter, Route} from 'react-router-dom';
import {RootComponent} from './component/MyLayout';
import {LoginComponent} from './component/Login'
import {RegisterComponent} from './component/Register'

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <Route path='/' exact component={RootComponent}>

            </Route>
            <Route path='/login' component={LoginComponent}/>
            <Route path='/register' component={RegisterComponent}/>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
