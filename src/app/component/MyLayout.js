import React, {Component} from 'react';
import {HeaderComponent} from './layout/Header'
import {SideBarComponent} from './layout/SideBar'
import {BodyComponent} from './layout/Body'
import {ButtomComponent} from './layout/Bottom'


export default class RootComponent extends Component {
  render() {
    return (
        <div>
          <HeaderComponent/>
          <SideBarComponent/>
          <BodyComponent {...this.props}/>
          <ButtomComponent/>
        </div>
    );
  }
}




