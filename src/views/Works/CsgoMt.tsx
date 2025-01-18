import { Container, Tag, Text } from '@/components/shared'
import Article from '@/components/ui/Article'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { FaCartShopping } from 'react-icons/fa6'

const CsgoMt = () => {
  return (
    <Article>
      <Container className='text-left'>
        <Breadcrumb time='03.2024-' pageTitle='CSGO MT' />
        <Text className='mt-2 hyphens-auto text-justify indent-4'>
          Play Roulette, Coinflip, Cases & Case Battles.
        </Text>

        <div
          data-test='website'
          className='ml-[1rem] mt-2 flex items-center gap-md'
        >
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
        <div
          data-test='stack'
          className='ml-[1rem] mt-1 flex items-center gap-md'
        >
          <Tag
            className='w-fit bg-light-grey-2 dark:bg-dark-grey-3-alt'
            uppercase
          >
            Stack
          </Tag>

          <Text size='medium'>
            NestJs, VueJs, ReactJs, Tailwind, MongoDB, Web Socket, Redis
          </Text>
        </div>
        <div className='mt-2 flex items-center justify-center gap-md rounded bg-dark-2 p-2 text-center'>
          <FaCartShopping className='text-yellow-2' size={20} />
          <Text>
            Interested in purchasing this website?{' '}
            <a
              href='https://t.me/snmtriet'
              className='transition-all hover:text-yellow-2 hover:underline'
              target='_blank'
            >
              <strong> Contact me!</strong>
            </a>
          </Text>
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
