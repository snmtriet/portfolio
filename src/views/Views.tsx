import { publicRoutes } from '@/configs/routes.config'
import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'

const AllRoutes = () => {
  const location = useLocation()
  return (
    <AnimatePresence
      mode='wait'
      initial={true}
      onExitComplete={() => {
        if (typeof window !== 'undefined') {
          window.scrollTo({ top: 0 })
        }
      }}
    >
      <Routes location={location} key={location.pathname}>
        {publicRoutes.map((route) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              element={route.component}
            />
          )
        })}
      </Routes>
    </AnimatePresence>
  )
}

const Views = () => {
  return <AllRoutes />
}

export default Views
