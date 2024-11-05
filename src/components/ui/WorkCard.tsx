import { Link } from 'react-router-dom'
import { Text } from '../shared'
import { cn } from '@/utils'

type Props = {
  className?: string
  thumbnail: string
  title: string
  subTitle?: string
  link?: string
  target?: '_blank' | '_self' | '_parent' | '_top'
}

const WorkCard = (props: Props) => {
  const { className, thumbnail, title, subTitle, link, target } = props
  return (
    <div className={cn('flex aspect-video flex-col gap-md', className)}>
      <Link to={link || '#'} target={target}>
        <img
          src={thumbnail}
          alt={title}
          className='w-full rounded-md border object-cover md:max-h-[157px]'
        />
      </Link>
      <div className='text-center'>
        <Text bold>{title}</Text>
        <Text>{subTitle}</Text>
      </div>
    </div>
  )
}

export default WorkCard
