import { CommonProps } from '@/@types/common'
import { cn } from '@/utils'

interface Props extends CommonProps {
  size: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  bold?: boolean
}

const tagBySize = {
  xxs: 'h6',
  xs: 'h5',
  sm: 'h4',
  md: 'h3',
  lg: 'h2',
  xl: 'h1',
}

const Heading = (props: Props) => {
  const { size = 'md', bold, className, ...rest } = props
  const HeadingTag = tagBySize[size] as keyof JSX.IntrinsicElements
  return (
    <HeadingTag
      className={cn(
        {
          'font-bold': bold,
        },
        className,
        'font-heading',
      )}
      {...rest}
    />
  )
}

export default Heading
