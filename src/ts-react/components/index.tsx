/**
 * @types/react 定义react ， 也可以用react.d.ts来定义
 * @types/react-dom 定义react-dom， 也可以react-dom.d.ts来定义
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Init } from './init';

ReactDOM.render(
  <Init compiler="TypeScript" framework="React" />,
  document.getElementById('root') as HTMLElement
);