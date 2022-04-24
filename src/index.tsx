/*
 * Copyright (c) 2020-2022. kokoro-aya. All right reserved.
 * Shizuku - A Playground Front-End implemented with React/Ant Design/UmiJS and Monaco Editor
 *
 * This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or any later version.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.
 * You should have received a copy of the GNU Affero General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.
 *
 */

import React from 'react';
import SimpleLayout from '@/SimpleLayout';
// FIXME: remove useless import and refactor styles

interface IndexProps {
  children: React.ReactNode;
}

const Index: React.FC<IndexProps> = (props: IndexProps) => {
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
      `}</style>
      {<SimpleLayout>{props.children}</SimpleLayout>}
    </>
  );
};

export default Index;
