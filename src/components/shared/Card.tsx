import { CommonProps } from '@/@types/common'
import { cn } from '@/utils'

interface Props extends CommonProps {
  separated?: boolean
}

const Card = (props: Props) => {
  const { className, children, ...rest } = props
  return (
    <div
      className={cn('dark:bg-dark-3 rounded bg-white/40 p-md', className)}
      {...rest}
    >
      {children}
    </div>
  )
}

export default Card
