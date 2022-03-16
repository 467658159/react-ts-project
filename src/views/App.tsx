import React, { Suspense } from 'react'
import { Routes, HashRouter, Route } from 'react-router-dom'
import { Spin } from 'antd'
import { IRoute } from 'Src/router/type'
import 'antd/dist/antd.css'
import { layoutRouteList } from 'Src/router/utils'

const App = function () {
  return (
    <Suspense fallback={<Spin className="lazy_loading" />}>
      <HashRouter>
        <Routes>
          {layoutRouteList.map((route: IRoute) => (
            <Route key={`${route.path}`} path={`${route.path}`} element={<route.component />} />
          ))}
        </Routes>
      </HashRouter>
    </Suspense>
  )
}

export default App
