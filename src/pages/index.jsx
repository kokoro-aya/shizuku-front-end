import {Layout, Menu, Select, Space, Switch} from 'antd'
import { Link } from 'umi'
import { MenuUnfoldOutlined, MenuFoldOutlined, CodeOutlined, EditOutlined, ProfileOutlined } from '@ant-design/icons'
import React, {Component} from "react"
import {solarized} from "../fragments/solarized";

const { Header, Sider, Content } = Layout
const { Option } = Select

class SimpleLayout extends React.Component {
  state = {
    collapsed: false,
    theme: 'light',
  }

  onCollapse = collapsed => {
    this.setState({ collapsed })
  }

  changeTheme = value => {
    this.setState({theme: value ? 'dark' : 'light',})
  }

  render() {
    return (
      <Layout>
        <Sider theme={this.state.theme} collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" style={{ minHeight : '60px' }}/>
          <Menu  mode="inline"  defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<CodeOutlined />}>
              <Link to="/main">
              Playground
              </Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<EditOutlined />}>
              <Link to="/editor">
              Edit
              </Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<ProfileOutlined />}>
              <Link to="/about">
              About
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0, }}>
            <Space size="large">
              <Switch checked={this.state.theme==='dark'}
                      onChange={this.changeTheme}
                      checkedChildren="Dark"
                      unCheckedChildren="Light"
                      style={{ marginLeft: '16px' }}
                      />
              <Select defaultValue="chinese" style={{ width: 144, }}>
                <Option value="chinese">中文/Chinese</Option>
                <Option value="english" disabled>英文/English</Option>
                <Option value="french" disabled>法语/Français</Option>
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
            {
              this.props.children
            }
          </Content>
        </Layout>
      </Layout>
    )
  }
}

const Index = (props) => {
  return (
    <>
      <style>{`
        .square:before {
          display: inline-block;
          padding-top: 100%;
          content: '';
        }
        .square>span {
          width: 100%;
          height: 100%;
        }
        .square>span>svg {
          width: 100%;
          height: auto;
          object-fit: fill;
          overflow: hidden;
        }
        ${solarized}
      `}</style>
      <SimpleLayout>
        {props.children}
      </SimpleLayout>
    </>
  )
}

export default Index
