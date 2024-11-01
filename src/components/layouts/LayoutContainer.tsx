import { Loading } from '@/components/shared'
import { cn } from '@/utils'
import { Suspense, lazy, useMemo } from 'react'
import { LAYOUT_TYPE_DEFAULT } from '../../constants/theme.constant'
import { useTheme } from '@/context/theme.context'

const layouts = {
  default: lazy(() => import('./MainLayout')),
}

const LayoutContainer = () => {
  const { isDarkMode } = useTheme()

  const AppLayout = useMemo(() => {
    return layouts[LAYOUT_TYPE_DEFAULT]
  }, [])

  return (
    <Suspense
      fallback={
        <div
          className={cn('loading-center', isDarkMode ? 'bg-dark' : 'bg-light')}
        >
          <Loading loading={true} type='preloader' />
        </div>
      }
    >
      <AppLayout />
    </Suspense>
  )
}

export default LayoutContainer
