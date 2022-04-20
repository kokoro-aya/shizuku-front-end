import { Layout, Menu, Select, Space, Switch } from 'antd';
import { Link } from 'umi';
import {
  CodeOutlined,
  EditOutlined,
  ProfileOutlined,
  HomeOutlined,
  ReadOutlined,
  FileSearchOutlined,
  AndroidOutlined,
  MessageOutlined,
} from '@ant-design/icons';
import React, { useState } from 'react';
import { material_oceanic } from '@/styles/prism-material-oceanic';
import { material_light } from '@/styles/prism-material-light';
import { darcula } from '@/styles/prism-darcula';
import { atom_dark } from '@/styles/prism-atom-dark';
import { solarized_light } from '@/styles/prism-solarized-light';
import { Theme, ThemeState } from '@/models/codescheme';
import { DispatchSender } from '@/models/dispatch.type';
import SimpleLayout from '@/SimpleLayout';
// FIXME: remove useless import and refactor styles

interface IndexProps {
  children: React.ReactNode;
}

const Index: React.FC<IndexProps> = (props: IndexProps) => {
  const [codeHighlightStyle, setCodeHighlightStyle] = useState(solarized_light);

  const changeColor = (type: string) => {
    switch (type) {
      case 'atom-dark': {
        setCodeHighlightStyle(atom_dark);
        break;
      }
      case 'darcula': {
        setCodeHighlightStyle(darcula);
        break;
      }
      case 'material-light': {
        setCodeHighlightStyle(material_light);
        break;
      }
      case 'material-oceanic': {
        setCodeHighlightStyle(material_oceanic);
        break;
      }
      case 'solarized-light': {
        setCodeHighlightStyle(solarized_light);
        break;
      }
    }
  };

  return (
    <>
      <style>{`
        .square:before {
          display: inline-block;
          padding-top: 100%;
          content: '';
        }
        .square>span {
          position: absolute;
          width: 100%;
          height: 100%;
          z-index: 5;
        }
        .square>span>svg {
          position: relative;
          width: 100%;
          height: auto;
          object-fit: fill;
          overflow: hidden;
        }
        ${codeHighlightStyle}
      `}</style>
      {<SimpleLayout>{props.children}</SimpleLayout>}
    </>
  );
};

export default Index;
