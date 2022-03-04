import React from 'react'

interface IProps {
  name: string
  age: number
}

function App(Props: IProps) {
  const { name, age } = Props
  return (
    <div className="app">
      <span>{`Hello! I'm ${name}, ${age} years old.`}</span>
    </div>
  )
}

export default App
