import RootComponent from '../component/MyLayout';
import LoginComponent from '../component/Login';
import RegisterComponent from '../component/Register';

import BodyOneComponent from '../component/bodyComponent/BodyOneComponent';

export default [
  {
    exact: true,
    path: '/login',
    component: LoginComponent
  },
  {
    path: '/register',
    component: RegisterComponent
  },
  {
    path: "/",
    component: RootComponent,
    routes:[
      {
        path: "/api",
        component: BodyOneComponent
      }
    ]
  }
];