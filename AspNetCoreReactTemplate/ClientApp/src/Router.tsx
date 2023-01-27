import { createBrowserRouter } from 'react-router-dom'
import { App } from './App'
import { Home } from './components/Home'
import { Config } from './components/Config'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: '/', element: <Config /> },
      { path: '/config', element: <Config /> }
    ]
  }
])
