import MainLayout from './components/layouts/MainLayout'

function App() {
  const theme = localStorage.getItem('theme') || 'dark'
  const isDarkMode = theme === 'dark'
  const root = window.document.documentElement
  root.classList.remove(isDarkMode ? 'light' : 'dark')
  root.classList.add(isDarkMode ? 'dark' : 'light')
  return <MainLayout />
}

export default App
