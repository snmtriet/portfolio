import { CommonProps } from '@/@types/common'
import { cn } from '@/utils'

interface Props extends CommonProps {
  size?: 'xl' | 'large' | 'medium' | 'small' | 'xs'
  bold?: boolean
  underline?: boolean
}

const Text = (props: Props) => {
  const { size, bold, underline, className, children, ...rest } = props

  return (
    <span
      className={cn(className, 'block', {
        underline: underline,
        'font-bold': bold,
        'text-xl': size === 'xl',
        'text-large': size === 'large',
        'text-medium': size === 'medium',
        'text-small': size === 'small',
        'text-xs': size === 'xs',
      })}
      {...rest}
    >
      {children}
    </span>
  )
}

export default Text
