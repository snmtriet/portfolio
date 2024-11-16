import { Container, Tag, Text } from '@/components/shared'
import Article from '@/components/ui/Article'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const MangaMt = () => {
  return (
    <Article>
      <Container className='text-left'>
        <Breadcrumb time='11.2024-' pageTitle='Manga MT' />
        <Text className='mt-2 hyphens-auto text-justify indent-4'>
          Free read manga online in high quality. No ads, No registration
          required. Just enjoy your manga
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
            to='https://mangamt.vercel.app'
            className='flex items-center gap-xs'
          >
            <Text
              bold
              size='medium'
              className='!text-purple-1 underline-offset-2 outline-offset-2 hover:underline dark:!text-yellow-2'
            >
              https://mangamt.vercel.app
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

          <Text size='medium'>ReactJs, Tailwind</Text>
        </div>
        <div className='mt-2 flex flex-col gap-lg'>
          <img
            src='/images/mangamt.png'
            className='rounded-md'
            title='Homepage'
          />
          <img
            src='/images/mangamt-detail.png'
            className='rounded-md'
            title='Manga info'
          />
          <img
            src='/images/mangamt-read.png'
            className='rounded-md'
            title='Manga read'
          />
        </div>
      </Container>
    </Article>
  )
}

export default MangaMt
