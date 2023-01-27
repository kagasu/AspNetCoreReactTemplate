document.getElementById('theme-link')?.setAttribute('href', '/css/themes/bootstrap4-dark-blue/theme.css')
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router'
import PrimeReact from 'primereact/api'

PrimeReact.ripple = false

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
  </React.StrictMode>
)
