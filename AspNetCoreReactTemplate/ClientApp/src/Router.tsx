import { createBrowserRouter } from 'react-router-dom'
import { App } from './App'
import { Home } from './components/Home'
import { Config } from './components/Config'
import { HelloWorld } from './components/HelloWorld'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: '/', element: <Home /> },
      { path: '/config', element: <Config /> },
      { path: '/helloworld', element: <HelloWorld /> }
    ]
  }
])
