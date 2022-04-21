import React from 'react';
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

class SimpleLayout extends React.Component<
  SimpleLayoutProps,
  SimpleLayoutStates
> {
  constructor(props: SimpleLayoutProps) {
    super(props);
    this.state = {
      collapsed: false,
      theme: 'light',
    };
  }

  onCollapse = (collapsed: boolean) => {
    this.setState({ collapsed });
  };

  changeTheme = (value: boolean) => {
    this.setState({ theme: value ? 'dark' : 'light' });
  };

  render() {
    return (
      <Layout>
        <Sider
          theme={this.state.theme}
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'sticky',
            left: 0,
            top: 0, // source: https://github.com/ant-design/ant-design/issues/6997
          }}
        >
          <div className="logo" style={{ minHeight: '60px' }} />
          <Menu
            theme={this.state.theme}
            mode="inline"
            defaultSelectedKeys={['1']}
          >
            <Menu.Item key="1" icon={<HomeOutlined />}>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<CodeOutlined />}>
              <Link to="/playground">Playground</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<EditOutlined />}>
              <Link to="/editor">Edit</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<FileSearchOutlined />}>
              <Link to={'/gallery'}>Gallery</Link>
            </Menu.Item>
            <Menu.Item key="5" icon={<AndroidOutlined />}>
              <Link to={'/story'}>Story</Link>
            </Menu.Item>
            <Menu.Item key="6" icon={<ReadOutlined />}>
              <Link to="/help">Help</Link>
            </Menu.Item>
            <Menu.Item key="7" icon={<MessageOutlined />}>
              <Link to="/feedback">Feedback</Link>
            </Menu.Item>
            <Menu.Item key="8" icon={<ProfileOutlined />}>
              <Link to="/about">About</Link>
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
            <Space size="large">
              <Switch
                checked={this.state.theme === 'dark'}
                onChange={this.changeTheme}
                checkedChildren="暗色"
                unCheckedChildren="亮色"
                style={{ marginLeft: '16px' }}
              />
              <Select defaultValue="chinese" style={{ width: 144 }}>
                <Option value="chinese">中文/Chinese</Option>
                <Option value="english" disabled>
                  英文/English
                </Option>
                <Option value="french" disabled>
                  法语/Français
                </Option>
              </Select>
              <Select
                defaultValue="light"
                style={{ width: 144 }}
                onChange={
                  (sel) =>
                    this.props.dispatch<Theme>({
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
            {this.props.children}
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            2020 - 2022 - Shizuku (天津風 x 雫) created by kokoro-aya
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default connect(mapStateToProps)(SimpleLayout);
