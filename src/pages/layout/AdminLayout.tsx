import {Outlet} from 'react-router-dom'
import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';

const { Header, Sider, Content } = Layout;

const AdminLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        
        <div className="logo" />
        
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
        />
          <a href="http://localhost:5173/admin" style={{color:'white', fontSize:'20px'}}>Amin</a> <br />
          <a href="http://localhost:5173/admin/products" style={{color:'white', fontSize:'20px' }}>Admin Product</a>
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: colorBgContainer }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}

        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 700,
            width: 1080,
            background: colorBgContainer,
          }}
        >
          <div style={{
            height: 400,
          }}><Outlet/></div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;