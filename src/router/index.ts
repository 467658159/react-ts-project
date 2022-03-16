import { lazy } from 'react'
import { IRoute } from './type'

const System = lazy(() => import('../components/UserLayout'))

export const routes: IRoute[] = [
  {
    path: '/system',
    redirect: '/system/login',
    component: System,
    meta: {
      title: '系统',
    },
    children: [
      {
        path: '/system/login',
      },
    ],
  },
]
