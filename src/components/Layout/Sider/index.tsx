import React, { memo } from 'react'

import { Layout } from 'antd'

interface IProps {
  collapsed: boolean
}

const Sider: React.FC<IProps> = memo(({ collapsed }) => (
  <Layout.Sider collapsible trigger={null} collapsed={collapsed}>
    <div className="logo" />
  </Layout.Sider>
))

export default Sider
