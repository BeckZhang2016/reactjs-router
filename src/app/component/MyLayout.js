import React, {Component} from 'react';
import {Layout, Menu, Breadcrumb, Icon, Button, Affix} from 'antd';
import '../App.css';
import {Route} from 'react-router-dom';

const {SubMenu, ItemGroup} = Menu;
const {Header, Content, Sider, Footer} = Layout;

export default class RootComponent extends Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const {routes} = this.props;
    return (
        <Layout style={{minHeight: '100vh'}}>
          <Sider trigger={null} collapsed={this.state.collapsed} breakpoint="lg">
            <div className="logo"/>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <Icon type="user"/>
                <span>nav 1</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="video-camera"/>
                <span>nav 2</span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="upload"/>
                <span>nav 3</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{lineHeight: '64px'}}>
              <Menu mode="horizontal" style={{lineHeight: '64px'}}>
                <Menu.Item key="1">
                  <Icon type="user"/>
                  <span>nav 1</span>
                </Menu.Item>
                <Menu.Item key="2">
                  <Icon type="video-camera"/>
                  <span>nav 2</span>
                </Menu.Item>
                <SubMenu title={<span>setting</span>}>
                  <Menu.Item key="setting:1">Option 1</Menu.Item>
                  <ItemGroup title="Item 2">
                    <Menu.Item key="setting:3">Option 3</Menu.Item>
                    <Menu.Item key="setting:4">Option 4</Menu.Item>
                  </ItemGroup>
                </SubMenu>
              </Menu>
            </Header>
            <Content style={{margin: '16px 16px', padding: 24, background: '#fff', minHeight: 280}}>
              {
                routes.map((route, index) => (<Route key={index} exact={route.exact} path={route.path}
                                                     render={(props) => (
                                                         <route.component {...this.props} routes={route.routes}/>)}/>))
              }
            </Content>
            <Footer></Footer>
          </Layout>
        </Layout>
    );
  }
}




