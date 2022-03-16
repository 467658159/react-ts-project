import { RouteProps } from 'react-router-dom'

export type Roles = 'admin' | 'user' | 'information' | 'product'

export interface IRoute extends RouteProps {
  // 组件
  component?: any
  // 重定向
  redirect?: string
  // 子路由
  children?: IRoute[]
  // 角色
  roles?: Roles
  // true为不渲染在侧边栏上
  hidden?: boolean
  // 路由元信息
  meta?: IRouteMeta
}

export interface IRouteMeta {
  title: string
  icon?: string
}
