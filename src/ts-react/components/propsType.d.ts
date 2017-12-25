// 定义一个接口约束传递进来的参数类型(类似传统js中[组件.propTypes = {})


export interface InitProps { compiler: string; framework: string; }


export interface layoutMainProps {
  add: () => void,
  reduce: () => void,
  val: any,
}