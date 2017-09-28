import RootComponent from '../component/MyLayout';
import LoginComponent from '../component/Login';
import RegisterComponent from '../component/Register';

import BodyOneComponent from '../component/bodyComponent/BodyOneComponent';

export default [
  {
    path: '/login',
    component: LoginComponent
  },
  {
    path: '/register',
    component: RegisterComponent
  },
  {
    exact: true,
    path: "/",
    component: RootComponent,
    routes:[
      {
        path: "/",
        component: BodyOneComponent
      }
    ]
  }
];