import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {Button} from 'antd';

export default class BodyOneComponent extends Component{
  render(){
    return (
        <div>
          <Button type={'primary'}>BodyOneComponent</Button>
        </div>
    )
  }
}
