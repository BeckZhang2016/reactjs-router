import React, {Component} from 'react';
import 'antd/dist/antd.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import routes from './routes/Routes';

class App extends Component {
  render() {
    return (
        <Router>
          <Route>
            {
              routes.map((route) => {
                return <Route {...route} key={route.id}/>
              })
            }
          </Route>
        </Router>
    );
  }
}

export default App;
