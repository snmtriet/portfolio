import { Link, useLocation } from 'react-router-dom'
import { Heading, Tag, Text } from '../shared'
import { IoIosArrowForward } from 'react-icons/io'

type Props = {
  time: string
}

const Breadcrumb = (props: Props) => {
  const { time } = props
  const location = useLocation()
  const [, prevRoute, badge] = location.pathname.split('/')
  return (
    <div className='flex items-center'>
      <div className='flex items-center'>
        <Link
          to={`/${prevRoute}`}
          className='text-purple-1 underline-offset-2 outline-offset-2 hover:underline dark:text-yellow-2'
        >
          <Text size='xl' className='capitalize'>
            {prevRoute}
          </Text>
        </Link>
        <IoIosArrowForward size={24} className='ml-0.5' />
      </div>
      <Heading size='lg' bold className='text-xl capitalize'>
        {badge}
      </Heading>
      <Tag className='ml-2 bg-light-grey-2 dark:bg-dark-grey-1'>{time}</Tag>
    </div>
  )
}

export default Breadcrumb
