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
import { Card, Col, Divider, Row, Tabs } from 'antd';
import { useIntl } from '@@/plugin-locale/localeExports';
import { renderMessage } from '@/locales/hook';

const { TabPane } = Tabs;

const ShizukuDesc = () => {
  const style = {
    marginBottom: '16px' as const,
    overflowWrap: 'break-word' as const,
  };
  return (
    <>
      <div style={style}>
        Shizuku is an application that allows you to write your code and
        interact with a character in a grid.
      </div>
      <div style={style}>
        As you can see, the application consists of three panels, the larger one
        on the left hand side is where you can input your code and submit it to
        the server. We use Amatsukaze as our language for this application. On
        the right hand side there are two panels, the top one shows the grid and
        it reflects the status of the grid and your character when your code is
        in process. The bottom one will output anything you want to print out
        using the method `print()`.
      </div>
      <div style={style}>
        You can input anything as you wish but only the valid code will be
        executed. You can see the notification at the top left corner indicating
        if the submit was succeeded.
      </div>
      <div style={style}>
        In the grid you can see the following symbols. They define the terrain
        of the grid and the position of your character.{' '}
      </div>

      <div style={style}>
        - (nothing): it indicates an open case, your character can walk through
        it.
      </div>
      <div style={style}>
        - ▷ : it indicates your character with its direction.
      </div>
      <div style={style}>
        - 🏔: it indicates a barrier, which your character cannot walk on.
      </div>
      <div style={style}>
        - 💎: a gem on an open case, if your character collects it, it will
        become an open case.
      </div>
      <div style={style}>
        - 🔳: a closed switch, your character can open it using your command.
      </div>
      <div style={style}>- 🔲: an opened switch, it could be closed.</div>

      <div style={style}>
        This is a simple but core interface of the Shizuku application. In the
        future, we will bring back some new features on this interface.
      </div>
    </>
  );
};

const AmatsukazeDesc = () => {
  const style = {
    marginBottom: '16px' as const,
    overflowWrap: 'break-word' as const,
  };
  return (
    <>
      <div style={style}>
        Amatsukaze is a simple programming language dedicated for the
        application Shizuku. It supports basics of a programming language such
        as arithmetic calculus, loops, functions, etc. Besides, it uses some
        APIs of Shizuku to control the character in the grid to interact with
        your code.
      </div>
      <h3>Arithmetic operations</h3>
      <div style={style}>
        Just type into the code panel some simple expressions.
      </div>
      <pre style={style}>
        <code>
          3 + 3<br />
          4 * 5<br />
          6 * (12 - 8)
          <br />9 % 2
        </code>
      </pre>
      <div style={style}>
        There will be no output, it's just normal. But these expressions are
        still valid. If you want to see their results, just add `print()` to
        each expression.
      </div>
      <div style={style}>
        You can test the truth of a boolean expression as well.
      </div>
      <pre style={style}>
        <code>
          true && false || true
          <br />
          false
        </code>
      </pre>
      <div style={style}>
        You can test the value of an arithmetic expression, like this.
      </div>
      <pre style={style}>
        <code>
          7 {'>'}= 9<br />
          2 &lt; 1<br />
          6 &lt;= 3<br />3 {'>'} 12
        </code>
      </pre>
      <div style={style}>
        The following operators apply on both boolean and arithmetic
        expressions.
      </div>
      <pre style={style}>
        <code>
          3 == 4<br />
          5 != 2<br />
          true == false
          <br />
          false != true
        </code>
      </pre>
      <div style={style}>
        In fact these operations will return a boolean value and they could be
        chained to constitute more complex expressions.
      </div>
      <h3>Constants, variables</h3>
      <div style={style}>
        It will be useful if we could store our values in somewhere, so that we
        could modify it and load it as long as we wish. In Amatsukaze, there are
        two type of "something to store a value", they are constants and
        variables. The difference is that constant could not be changed once
        it's initialized, while a variable could be modified.
      </div>
      <pre style={style}>
        <code>
          cst a = "foo"
          <br />
          var b = 'b'
          <br />
          b = 'c'
          <br />
        </code>
      </pre>
      <div style={style}>
        You don't need to specify a type of a variable or a constant, it will be
        inferred by the language. However, once a variable is declared in a type
        (such as Int), it cannot receive a value from another (such as String)
        type.
      </div>
      <pre style={style}>
        <code>
          cst a = 4 + 3<br />
          var b = 4<br />
          b = a * b<br />b = 0
        </code>
      </pre>
      <div style={style}>
        For numeric values, you can also use their shorthand operators, +=, -=,
        *=, /=, %=. Recall that these operators should only be applied on
        variables as they will modify the lhs.
      </div>
      <pre style={style}>
        <code>
          var a = 444
          <br />
          a /= 4<br />
          a -= 11
          <br />
          a += 25
          <br />a *= 4
        </code>
      </pre>
      <h3>Types</h3>
      <div style={style}>There are five internal types in Amatsukaze:</div>

      <div> - Int</div>
      <div> - Double</div>
      <div> - Bool</div>
      <div> - Character</div>
      <div style={style}> - String</div>

      <div style={style}>And a special type for functions:</div>

      <div style={style}> - Void</div>

      <div style={style}>Which means that it will return nothing.</div>

      <h3>Conditions, Loops</h3>
      <div style={style}>
        Simple expressions won't be enough to drive our character. Therefore we
        have conditions and loops.
      </div>

      <div style={style}>
        This is a classic for-in loop. <code>...</code> means go through and{' '}
        <code>..&lt;</code> means goes until.
      </div>

      <pre style={style}>
        <code>
          {'for i in 0 ... 4 {'}
          <br />
          {'  a += i'}
          <br />
          {'}'}
          <br />
        </code>
      </pre>

      <div style={style}>
        If you don't need the local variable in the loop, you can use underscore
        to replace it. In fact, the local variable will consume a name (such as
        i), and it could not be used later since it's shadowed.
      </div>

      <pre style={style}>
        <code>
          {'for _ in 0 ..< 4 {'}
          <br />
          {'  a += i'}
          <br />
          {'}'}
          <br />
        </code>
      </pre>

      <div style={style}>You use if to test a condition.</div>

      <pre style={style}>
        <code>
          {'if a % 6 == 0 {'}
          <br />
          {'  print("foo")'}
          <br />
          {'}'}
        </code>
      </pre>

      <div style={style}>
        If you need to test another condition after that, you use else. The else
        if clause could be chained.
      </div>

      <pre style={style}>
        <code>
          {'if a % 6 == 0 {'}
          <br />
          {'  print("foo")'}
          <br />
          {'} else if a % 3 == 0 {'}
          <br />
          {'  print("bar")'}
          <br />
          {'} else {'}
          <br />
          {'  print("foobar")'}
          <br />
          {'}'}
        </code>
      </pre>

      <div style={style}>There are also while loop and repeat-while loop.</div>

      <pre style={style}>
        <code>
          {'var i = 1'}
          <br /> <br />
          {'while i < 3 {'}
          <br />
          {'  i += 1'}
          <br />
          {'  }'}
          <br /> <br />
          {'  repeat {'}
          <br />
          {'  print(i)'}
          <br />
          {'  i -= 1'}
          <br />
          {'} while i > 0'}
        </code>
      </pre>
      <div style={style}>
        Note that the conditions and loops could be nested, this will help when
        you develop big algorithms for a complicated grid.
      </div>

      <h3>Functions</h3>
      <div style={style}>This is a simple function without parameter.</div>
      <pre style={style}>
        <code>
          {'func foo(): Int {'}
          <br />
          {'  return 3'}
          <br />
          {'}'}
          <br />
          {'print(foo())'}
        </code>
      </pre>
      <div style={style}>It could have several or one parameters.</div>
      <pre style={style}>
        <code>
          {'func foo(a: Int): Int {'}
          <br />
          {'  return a + 1'}
          <br />
          {'}'}
          <br />
          {'print(foo(3))'}
        </code>
      </pre>
      <div style={style}>
        If two functions have the same name but different numbers of parameters,
        then they could co-exist and one distinguish them by specifying
        different numbers of arguments.
      </div>
      <div style={style}>
        Note that if you add another function `foo() -{'>'} Void`, it will throw
        an error.
      </div>
      <div style={style}>
        You can nest conditions and loops in a function to create more powerful
        functions, however, a function must be declared on top level.
      </div>
      <div style={style}>
        You use `return` to indicate the return value for a function. If the
        function is Void, you don't need to and you mustn't return it. If you
        don't explicitly call it, the function will return at its last line.
      </div>
      <h3>Controls on player on grid</h3>
      <div style={style}>
        There are 7 properties and 4 elementary commands on character. Another
        useful function is <code>print()</code>.
      </div>
      <ul style={style}>
        <li>isOnGem</li>
        <li>isOnOpenedSwitch</li>
        <li>isOnClosedSwitch</li>
        <li>isBlocked</li>
        <li>isBlockedLeft</li>
        <li>isBlockedRight</li>
      </ul>

      <ul style={style}>
        <li>moveForward</li>
        <li>turnLeft</li>
        <li>toggleSwitch</li>
        <li>collectGem</li>
      </ul>
      <div style={style}>
        You can combine the commands and properties and your own code to create
        more powerful functions to help you solve the puzzle.
      </div>
    </>
  );
};

const UpdateLogs = () => {
  const style = {
    marginBottom: '16px' as const,
    overflowWrap: 'break-word' as const,
  };
  return (
    <>
      <h3>Amatsukaze</h3>
      <ul style={style}>
        <li>v1.2.0 - 2020.12.24 Closure, props, locks on playground, etc</li>
        <li>
          v1.1.0 - 2020.12.22 Enhanced ranged expression, internal functions and
          custom functions, rewrite on playground
        </li>
        <li>v0.9.0 - 2020.11.30 Grammar update</li>
        <li>v0.8.0 - 2020.11.02 Array type check and type inference</li>
        <li>v0.7.0 - 2020.10.15 1d arrays</li>
        <li>
          v0.6.0 - 2020.10.11 Simple functions, dot notation, variable scopes
        </li>
        <li>v0.5.0 - 2020.09.16 Grammar update</li>
        <li>v0.4.0 - 2020.08.07 Front-back communication parts</li>
        <li>v0.3.0 - 2020.07.08 Return from a function</li>
        <li>
          v0.2.0 - 2020.07.06 Basic features such as loops, branches, simple
          commands, ranges, arithmetics
        </li>
      </ul>
      <h3 style={style}>Shizuku</h3>
      <ul style={style}>
        <li>
          v1.1.0 - 2020.12.25 Adapted data structure and model to the new
          back-end
        </li>
        <li>v1.0.0 - 2020.12.23 Stable version</li>
        <li>v0.9.0 - 2020.12.19 The new front-end based on antd/dva/umijs</li>
        <li>
          v0.1.0 - 2020.08.06 The first simple front-end with create-react-app
        </li>
      </ul>
    </>
  );
};

const _ = () => {
  return (
    <Row>
      <Col xs={24} sm={22} md={20} lg={18} xl={16}>
        <Divider orientation="left">帮助说明</Divider>
        <Card
          title="Amatsukaze x Shizuku"
          style={{
            boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
            border: '1px solid #e8e8e8',
          }}
        >
          <Tabs defaultActiveKey="1">
            <TabPane tab="Shizuku" key="1">
              <ShizukuDesc />
            </TabPane>
            <TabPane tab="The Amatsukaze Language" key="2">
              <AmatsukazeDesc />
            </TabPane>
            <TabPane tab="Update Logs" key="3">
              <UpdateLogs />
            </TabPane>
          </Tabs>
        </Card>
      </Col>
    </Row>
  );
};

export default () => {
  const intl = useIntl();
  return (
    <div
      style={{
        minHeight: '600px',
      }}
    >
      <Divider orientation="left">
        {renderMessage(intl, 'section.Help')}
      </Divider>
      <div>{renderMessage(intl, 'underConstruct')}</div>
    </div>
  );
};
