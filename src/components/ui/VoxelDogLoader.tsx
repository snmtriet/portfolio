import { forwardRef, ReactNode } from 'react'
import { Spinner } from '../shared'
import { useTheme } from '@/context/theme.context'

export const DogSpinner = () => {
  const { isDarkMode } = useTheme()
  return (
    <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
      <Spinner
        isSpinning
        size={50}
        className={isDarkMode ? 'text-light-1' : 'text-dark'}
      />
    </div>
  )
}

export const DogContainer = forwardRef(
  ({ children }: { children: ReactNode }, ref: any) => (
    <div ref={ref} className='voxel-dog relative m-auto'>
      {children}
    </div>
  ),
)

const Loader = () => {
  return (
    <DogContainer>
      <DogSpinner />
    </DogContainer>
  )
}

export default Loader
