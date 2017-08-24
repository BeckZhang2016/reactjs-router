import {
  RootComponent,
  MainComponent,
  LoginComponent,
  RegisterComponent
} from '../component/component';

export default [
  {
    id: 1,
    component: RootComponent,
    path: "/",
    routes: [
      {
        id: 10,
        path: "/main",
        component: MainComponent
      }
    ]
  },
  {
    id: 2,
    path: "/login",
    component: LoginComponent
  },
  {
    id: 3,
    path: '/Register',
    component: RegisterComponent
  }
];