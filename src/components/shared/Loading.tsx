import type { ElementType, ReactNode } from 'react'
import type { CommonProps } from '@/@types/common'
import Spinner from './Spinner'
import { cn } from '@/utils'

interface BaseLoadingProps extends CommonProps {
  asElement?: ElementType
  customLoader?: ReactNode
  loading: boolean
  spinnerClass?: string
}

interface LoadingProps extends BaseLoadingProps {
  type?: 'default' | 'cover' | 'preloader'
}

const DefaultLoading = (props: BaseLoadingProps) => {
  const {
    loading,
    children,
    spinnerClass,
    className,
    asElement: Component = 'div',
    customLoader,
  } = props

  return loading ? (
    <Component className={cn(!customLoader && 'loading-default', className)}>
      {customLoader ? (
        <>{customLoader}</>
      ) : (
        <Spinner className={spinnerClass} size={40} />
      )}
    </Component>
  ) : (
    <>{children}</>
  )
}

const CoveredLoading = (props: BaseLoadingProps) => {
  const {
    loading,
    children,
    spinnerClass,
    className,
    asElement: Component = 'div',
    customLoader,
  } = props

  return (
    <Component className={cn(loading ? 'relative' : '', className)}>
      {children}
      {loading && (
        <div className='bg-light absolute inset-0 h-full w-full bg-opacity-50 dark:bg-gray-800 dark:bg-opacity-60' />
      )}
      {loading && (
        <div className='absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform'>
          {customLoader ? (
            <>{customLoader}</>
          ) : (
            <Spinner className={spinnerClass} size={40} />
          )}
        </div>
      )}
    </Component>
  )
}

const PreLoader = (props: BaseLoadingProps) => {
  const {
    loading,
    className,
    asElement: Component = 'div',
    customLoader,
  } = props

  return (
    <Component className={cn(loading ? 'relative' : '', className)}>
      {customLoader ? (
        customLoader
      ) : (
        <div id='preloader' className='preloader__container'>
          <div className='preloader__item'>
            <div className='preloader__spinner' />
            <img
              className='preloader__logo h-full w-full rounded-full object-cover'
              src='https://i.pinimg.com/originals/63/eb/c0/63ebc09daae37481cbdc0aa734202609.gif'
              alt=''
            />
          </div>
        </div>
      )}
    </Component>
  )
}

const Loading = ({ type, ...rest }: LoadingProps) => {
  switch (type) {
    case 'default':
      return <DefaultLoading {...rest} />
    case 'cover':
      return <CoveredLoading {...rest} />
    case 'preloader':
      return <PreLoader {...rest} />
    default:
      return <DefaultLoading {...rest} />
  }
}

Loading.defaultProps = {
  loading: false,
  type: 'default',
  asElement: 'div',
}

export default Loading
