/*
 * Copyright (c) 2020-2022. kokoro-aya. All right reserved.
 * Shizuku - A Playground Front-End implemented with React/Ant Design/UmiJS and Monaco Editor
 *
 * This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or any later version.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.
 * You should have received a copy of the GNU Affero General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.
 *
 */

import React, { useEffect, useState } from 'react';
import { Layout, Menu, Select, Space } from 'antd';
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
import { getLocale } from '@@/plugin-locale/localeExports';

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

  let defaultLocale = 'zh-CN';

  const locale = getLocale();
  if (['zh-CN', 'zh-TW', 'en-US', 'fr-FR'].includes(locale)) {
    defaultLocale = locale;
  } else {
    setLocale('en-US', false);
    defaultLocale = 'en-US';
  }

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
              defaultValue={defaultLocale}
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
