import React, { useState } from 'react';
import { Layout, Menu, Select, Space, Switch } from 'antd';
import {
  AndroidOutlined,
  CodeOutlined,
  EditOutlined,
  FileSearchOutlined,
  HomeOutlined,
  MessageOutlined,
  ProfileOutlined,
  ReadOutlined,
} from '@ant-design/icons';
import { connect, Link } from 'umi';
import { Theme, ThemeState } from '@/models/codescheme';
import { DispatchSender } from '@/models/dispatch.type';
import { setLocale, useIntl } from 'umi';

const namespace = 'codescheme';

const { Header, Sider, Content, Footer } = Layout;
const { Option } = Select;

const mapStateToProps = (state: ThemeStateToPropsMap) => {
  const { theme } = state[namespace];
  return { theme };
};

type ThemeStateToPropsMap = { codescheme: ThemeState };

interface SimpleLayoutProps extends DispatchSender {
  children: React.ReactNode;
}

interface SimpleLayoutStates {
  theme: 'dark' | 'light';
  collapsed: boolean;
}

const SimpleLayout: React.FC<SimpleLayoutProps> = (props) => {
  const [state, setState] = useState<SimpleLayoutStates>({
    collapsed: false,
    theme: 'light',
  });

  const onCollapse = (collapsed: boolean) => {
    setState({ ...state, collapsed });
  };

  const changeTheme = (value: boolean) => {
    setState({ ...state, theme: value ? 'dark' : 'light' });
  };

  return (
    <Layout>
      <Sider
        theme={state.theme}
        collapsible
        collapsed={state.collapsed}
        onCollapse={onCollapse}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'sticky',
          left: 0,
          top: 0, // source: https://github.com/ant-design/ant-design/issues/6997
        }}
      >
        <div className="logo" style={{ minHeight: '60px' }} />
        <Menu theme={state.theme} mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to="/">
              {useIntl().formatMessage({ id: 'section.Home' })}
            </Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<CodeOutlined />}>
            <Link to="/playground">
              {useIntl().formatMessage({ id: 'section.Playground' })}
            </Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<EditOutlined />}>
            <Link to="/editor">
              {useIntl().formatMessage({ id: 'section.Editor' })}
            </Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<FileSearchOutlined />}>
            <Link to={'/gallery'}>
              {useIntl().formatMessage({ id: 'section.Gallery' })}
            </Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<AndroidOutlined />}>
            <Link to={'/story'}>
              {useIntl().formatMessage({ id: 'section.Story' })}
            </Link>
          </Menu.Item>
          <Menu.Item key="6" icon={<ReadOutlined />}>
            <Link to="/help">
              {useIntl().formatMessage({ id: 'section.Help' })}
            </Link>
          </Menu.Item>
          <Menu.Item key="7" icon={<MessageOutlined />}>
            <Link to="/feedback">
              {useIntl().formatMessage({ id: 'section.Feedback' })}
            </Link>
          </Menu.Item>
          <Menu.Item key="8" icon={<ProfileOutlined />}>
            <Link to="/about">
              {useIntl().formatMessage({ id: 'section.About' })}
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            /*position: 'fixed', zIndex: 1, width: '100%',*/ padding: 0,
          }}
        >
          <Space size="large" align="center">
            <p></p>
            <Select
              onSelect={(value: string) => setLocale(value, false)}
              defaultValue="zh-CN"
              style={{ width: 192 }}
            >
              <Option value="zh-CN">简体中文/Simp. Chinese</Option>
              <Option value="zh-TW">正體中文/Trad. Chinese</Option>
              <Option value="en-US">英文/English</Option>
              <Option value="fr-FR">法语/Français</Option>
            </Select>
            <Select
              defaultValue="light"
              style={{ width: 144 }}
              onChange={
                (sel) =>
                  props.dispatch<Theme>({
                    type: `${namespace}/updateTheme`,
                    payload: sel as Theme,
                  })
                /* this.props.changeColor(sel)*/
              }
            >
              <Option value="light">Light</Option>
              <Option value="vs-dark">Visual Studio Dark</Option>
              <Option value="clouds">Clouds</Option>
              <Option value="dawn">Dawn</Option>
              <Option value="dracula">Dracula</Option>
              <Option value="monokai">Monokai</Option>
              <Option value="oceanic-next">Oceanic Next</Option>
              <Option value="solarized-light">Solarized Light</Option>
              <Option value="solarized-dark">Solarized Dark</Option>
              <Option value="twilight">Twilight</Option>
            </Select>
          </Space>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px, 16px',
            padding: 24,
            minHeight: 480,
          }}
        >
          {props.children}
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          2020 - 2022 - Shizuku (天津風 x 雫) created by kokoro-aya
        </Footer>
      </Layout>
    </Layout>
  );
};

export default connect(mapStateToProps)(SimpleLayout);
