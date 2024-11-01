import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from 'react'

interface ThemeContextType {
  isDarkMode: boolean
  toggleDarkMode: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const storedTheme = localStorage.getItem('isDarkMode')
    return storedTheme ? JSON.parse(storedTheme) : false
  })

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode
      localStorage.setItem('isDarkMode', JSON.stringify(newMode))
      return newMode
    })
  }

  useEffect(() => {
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode))
    const isEnabled = isDarkMode
    localStorage.setItem('theme', isEnabled ? 'dark' : 'light')
    const root = window.document.documentElement
    root.classList.remove(isEnabled ? 'light' : 'dark')
    root.classList.add(isEnabled ? 'dark' : 'light')
  }, [isDarkMode])

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
