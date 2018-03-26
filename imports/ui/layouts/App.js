import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

import Home from '../pages/Home.js';
import PostsFeed from '../pages/Posts.js'
import Post from '../pages/Post.js'

 
// App component - represents the whole app
export default class App extends Component {
  state = {
    isLoggedIn: false
  };
 
  render() {
    return (
      <Router>
        <Layout>
          <Header className="header">
            <div className="topnav-logo">
              <img src="/sapien-logo.png" href="/" alt="Sapien" width="100%"/>
            </div>
            <Menu
              theme="dark"
              mode="horizontal"
              style={{ lineHeight: '64px' }}
            >
                <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
                <Menu.Item key="2"><Link to="/posts">Posts</Link></Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <Layout style={{ padding: '24px 0', background: '#fff' }}>
              <Content style={{ padding: '0 24px', minHeight: 600 }}>
                <Switch>
                  <Route exact name="index" path="/" component={ Home } />
                  <Route exact name="posts" path="/posts" component={ PostsFeed } />
                  <Route exact name="post" path="/p/:_id" component={ Post } />
                </Switch>
              </Content>
            </Layout>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Created by Praveen Koka for Sapien
          </Footer>
        </Layout>
      </Router>
    );
  }
}