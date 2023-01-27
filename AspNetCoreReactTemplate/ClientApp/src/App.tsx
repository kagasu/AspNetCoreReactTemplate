import './App.css'
import { useState, SyntheticEvent } from 'react'
import { useNavigate, Outlet } from 'react-router-dom'
import { classNames } from 'primereact/utils'
import { Menubar } from 'primereact/menubar'
import { MenuItem } from 'primereact/menuitem'

export function App() {
  const navigate = useNavigate()
  const [activeId, setActiveId] = useState('Home')

  const items: MenuItem[] = [
    {
      id: 'Home',
      label: 'Home',
      className: (activeId === 'Home') ? 'active-menuitem' : undefined,
      icon: 'pi pi-fw pi-file',
      command: () => {
        setActiveId('Home')
        navigate('/')
      }
    },
    {
      id: 'Config',
      label: 'Config',
      className: (activeId === 'Config') ? 'active-menuitem' : undefined,
      icon: 'pi pi-fw pi-file',
      command: () => {
        setActiveId('Config')
        navigate('/config')
      }
    }
  ]

  const [themeIsDark, setThemeIsDark] = useState(true)

  const toggleTheme = ()  => {
    const filePath = (themeIsDark)
      ? '/css/themes/bootstrap4-light-blue/theme.css'
      : '/css/themes/bootstrap4-dark-blue/theme.css'
    document.getElementById('theme-link')?.setAttribute('href', filePath)
    setThemeIsDark(!themeIsDark)
  }

  const menubarEnd = (
    <i
      style={{ 'cursor': 'pointer' }}
      className={classNames('p-menuitem-icon', 'pi', 'pi-fw', (themeIsDark) ? 'pi-sun' : 'pi-moon')}
      onClick={() => { toggleTheme() }}
    />
  )

  return (
    <>
      <Menubar model={items} end={menubarEnd} />

      <div className='container'>
        <Outlet />
      </div>
    </>
  )
}
