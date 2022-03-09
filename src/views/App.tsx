import React, { Suspense } from 'react'
import { Spin } from 'antd'
import 'antd/dist/antd.css'

const App = function () {
  return <Suspense fallback={<Spin className="lazy_loading" />}>shenxiangan</Suspense>
}

export default App
