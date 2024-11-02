import { CommonProps } from '@/@types/common'
import { cn } from '@/utils'
import Text from './Text'

interface Props extends CommonProps {
  className?: string
  uppercase?: boolean
}

const Tag = (props: Props) => {
  const { className, children, uppercase, ...rest } = props
  return (
    <div
      className={cn('rounded-md px-2 py-1', { uppercase }, className)}
      {...rest}
    >
      <Text size='small' bold>
        {children}
      </Text>
    </div>
  )
}

export default Tag
