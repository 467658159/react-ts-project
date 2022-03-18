import React, { memo } from 'react'
import { useWindowSize, useDebounce } from 'react-use'
import { Layout } from 'antd'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { AppState, updateSideBar } from 'Src/store/module/app'
import { connect } from 'react-redux'
import './index.less'

interface IProps {
  updateSideBar: (sidebar: AppState['sidebar']) => void
  sidebar: AppState['sidebar']
}

const header: React.FC<IProps> = memo(({ sidebar, updateSideBar }) => {
  return <div>111</div>
})
