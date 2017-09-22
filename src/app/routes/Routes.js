import RootComponent from '../component/MyLayout';
import LoginComponent from '../component/Login';
import RegisterComponent from '../component/Register';
import Redx from '../test/redux/App';

export default [
  {
    path: '/login',
    component: LoginComponent
  }, {
    path: '/register',
    component: RegisterComponent
  },
  {
    exact: true,
    path: "/",
    component: RootComponent,
    routes:[
      {
        exact: true,
        path: '/',
        component: Redx
      }
    ]
  }
];