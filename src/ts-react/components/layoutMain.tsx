import * as React from 'react';
import { layoutMainProps } from './propsType';
import './layoutMain.less';

export function LayoutMain<props, undefined>(props: any) {
  const handleAddClick = () => {
    props.action(props.val + 1);
  }

  const handleReduceClick = () => {
    props.action(props.val - 1);
  }

  return (
    <div>
      <button onClick={handleAddClick} className="add">加</button>
      <button onClick={handleReduceClick} className="reduce">减</button>
    </div>
  );
}