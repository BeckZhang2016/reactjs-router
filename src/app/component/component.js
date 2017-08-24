import React, {Component} from 'react';
import {BrowserRouter, Switch, Link, Router} from 'react-router-dom';


export class RootComponent extends Component {
  render() {
    return (
        <div>
          <HeaderComponent/>
          <SidebarComponent/>
          <BodyComponent/>
          <BottomComponent/>
        </div>
    );
  }
}

export class HeaderComponent extends Component {
  render() {
    return (
        <div>HeaderComponent</div>
    );
  }
}

export class SidebarComponent extends Component {
  render() {
    return (
        <div>SidebarComponent</div>
    );
  }
}

export class BottomComponent extends Component {
  render() {
    return (
        <div>BottomComponent</div>
    );
  }
}

export class BodyComponent extends Component {
  render() {
    return (
        <div>BodyComponent</div>
    );
  }
}

export class MainComponent extends Component {
  render() {
    return (
        <div>MainComponent</div>
    );
  }
}

export class LoginComponent extends Component {
  render() {
    return (
        <div>LoginComponent</div>
    );
  }
}

export class RegisterComponent extends Component {
  render() {
    return (
        <div>RegisterComponent</div>
    );
  }
}




