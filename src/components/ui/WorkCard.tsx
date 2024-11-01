import { Link } from 'react-router-dom'
import { Text } from '../shared'
import { cn } from '@/utils'

type Props = {
  className?: string
  thumbnail: string
  title: string
  subTitle?: string
  link?: string
}

const WorkCard = (props: Props) => {
  const { className, thumbnail, title, subTitle, link } = props
  return (
    <div className={cn('flex aspect-video flex-col gap-md', className)}>
      <Link target='_blank' to={link || '#'}>
        <img src={thumbnail} alt={title} className='rounded-md border' />
      </Link>
      <div className='text-center'>
        <Text bold>{title}</Text>
        <Text>{subTitle}</Text>
      </div>
    </div>
  )
}

export default WorkCard
