import { Container, Tag, Text } from '@/components/shared'
import Article from '@/components/ui/Article'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const CsgoMt = () => {
  return (
    <Article>
      <Container className='text-left'>
        <Breadcrumb time='03.2024-' />
        <Text className='mt-2 hyphens-auto text-justify indent-4'>
          Play Roulette, Coinflip, Cases & Case Battles
        </Text>
        <div data-test='website' className='ml-4 mt-2 flex items-center gap-md'>
          <Tag
            className='w-fit bg-light-grey-2 dark:bg-dark-grey-3-alt'
            uppercase
          >
            Website
          </Tag>
          <Link
            to='https://csgomt.vercel.app'
            className='flex items-center gap-xs'
          >
            <Text
              bold
              size='medium'
              className='!text-purple-1 underline-offset-2 outline-offset-2 hover:underline dark:!text-yellow-2'
            >
              https://csgomt.vercel.app
            </Text>
            <HiOutlineExternalLink
              size={20}
              className='text-purple-1 dark:text-yellow-2'
            />
          </Link>
        </div>
        <div data-test='stack' className='ml-4 mt-1 flex items-center gap-md'>
          <Tag
            className='w-fit bg-light-grey-2 dark:bg-dark-grey-3-alt'
            uppercase
          >
            Stack
          </Tag>
          <Link
            to='https://csgomt.vercel.app'
            className='flex items-center gap-xs'
          >
            <Text size='medium'>
              NestJs, VueJs, ReactJS, MongoDB, Web Socket, Redis, Tailwind CSS
            </Text>
          </Link>
        </div>
        <div className='mt-2 flex flex-col gap-lg'>
          <img
            src='/images/csgomt-roulette.png'
            className='rounded-md'
            title='Roulette'
          />
          <img
            src='/images/csgomt-casebattles.png'
            className='rounded-md'
            title='Case Battles'
          />
          <img
            src='/images/csgomt-coinflip.png'
            className='rounded-md'
            title='Coinflip'
          />
          <img
            src='/images/csgomt-cases.png'
            className='rounded-md'
            title='Cases'
          />
          <img
            src='/images/csgomt-caseopening.png'
            className='rounded-md'
            title='Case Opening'
          />
          <img
            src='/images/csgomt-marketplace.png'
            className='rounded-md'
            title='Marketplace'
          />
        </div>
      </Container>
    </Article>
  )
}

export default CsgoMt
