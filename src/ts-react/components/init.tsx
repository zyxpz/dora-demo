import * as React from "react";
import { LayoutMain } from './layoutMain';
import { InitProps } from './propsType';

// 定义state
export interface State { val: number }

// 定义一个类去继承React.Component
export class Init extends React.Component<InitProps, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      val: 0
    }
  }

  handleAdd = (val: number): void => {
    this.setState({
      val,
    });
  }

  handleReduce = (val: number): void => {
    this.setState({
      val,
    });
  }

  render() {
    return (
      <div>
        <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
        <h2>{this.state.val}</h2>
        <LayoutMain
          add={this.handleAdd}
          reduce={this.handleReduce}
          val={this.state.val}
        />
      </div>
    );
  }
}