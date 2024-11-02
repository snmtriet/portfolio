import { cn } from '@/utils'
import { ReactNode } from 'react'

const Container = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <div
      className={cn(
        'relative z-10 mx-auto w-full max-w-xl md:px-xl',
        className,
      )}
    >
      {children}
    </div>
  )
}

export default Container
