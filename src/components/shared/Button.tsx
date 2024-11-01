import { CommonProps } from '@/@types/common'
import { cn } from '@/utils'
import { useMemo, ButtonHTMLAttributes } from 'react'

interface Props extends CommonProps, ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary'
  contentJustification?: 'center' | 'start' | 'end'
  before?: React.ReactNode
  after?: React.ReactNode
}

const Button = (props: Props) => {
  const {
    variant = 'primary',
    children,
    className,
    contentJustification = 'center',
    before,
    after,
    ...rest
  } = props

  const justifyClass = useMemo(
    () => `justify-${contentJustification}`,
    [contentJustification],
  )

  return (
    <button
      className={cn(
        'button text-dark-5 flex rounded px-3 font-[500]',
        `btn-${variant}`,
        className,
      )}
      {...rest}
    >
      <span className={cn('flex h-full items-center', justifyClass)}>
        {before}
        {children}
        {after}
      </span>
    </button>
  )
}

export default Button
