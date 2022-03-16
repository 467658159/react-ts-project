import React, { Suspense } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Spin, Result, Button, Typography } from 'antd'
import { IRoute } from 'Src/router/type'

interface UserLayoutState {
  isError: boolean
}

class UserLayout extends React.PureComponent<any, UserLayoutState> {
  state: UserLayoutState = {
    isError: false,
  }

  render() {
    return <div className="container">布局</div>
  }
}

export default UserLayout
