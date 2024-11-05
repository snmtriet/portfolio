import {
  Button,
  Card,
  Container,
  Heading,
  Section,
  Text,
} from '@/components/shared'
import Article from '@/components/ui/Article'
import { useTheme } from '@/context/theme.context'
import { useEffect } from 'react'
import { FaGithub, FaInstagram, FaTelegram } from 'react-icons/fa'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Home = () => {
  const { isDarkMode } = useTheme()
  useEffect(() => {
    document.title = 'Su Nguyen Minh Triet - Homepage'
  }, [])

  return (
    <Article>
      <Container>
        <Card className='my-xl px-10 backdrop-blur-md'>
          <Text size='large'>
            Hello, I'm a passionate frontend developer from Vietnam!
          </Text>
        </Card>

        <div className='flex flex-col items-center md:flex-row'>
          <div className='flex-1 text-left'>
            <Heading size='xl' bold className='text-3xl md:text-4xl'>
              Su Nguyen Minh Triet
            </Heading>
            <Text size='large'>Frontend developer</Text>
          </div>
          <div className='mt-4 md:ml-4 md:mt-0'>
            <img
              src='/images/snmtriet.png'
              alt='snmtriet'
              className='h-[96px] w-[96px] rounded-full border-2 border-dark object-cover dark:border-white'
            />
          </div>
        </div>

        <Section className='text-left' delay={0.1}>
          <Heading
            size='md'
            bold
            className='text-xl leading-5 underline decoration-[#525252] decoration-4 underline-offset-4'
          >
            Work
          </Heading>
          <Text className='mt-4 hyphens-auto text-justify indent-4'>
            Triet is a frontend developer with a passion for crafting beautiful,
            interactive web experiences. He loves transforming ideas into
            visually appealing and user-friendly interfaces using modern
            frameworks and technologies. Constantly learning and exploring new
            tools, he strives to make each website both functional and
            delightful for users.
          </Text>
        </Section>

        <div className='flex items-center justify-center'>
          <Link to='/works'>
            <Button
              variant={isDarkMode ? 'secondary' : 'primary'}
              contentJustification='center'
              after={<MdKeyboardArrowRight size={20} />}
              className='mx-auto'
            >
              My portfolio
            </Button>
          </Link>
        </div>

        <Section className='text-left' delay={0.2}>
          <Heading
            size='md'
            bold
            className='text-xl leading-5 underline decoration-[#525252] decoration-4 underline-offset-4'
          >
            Bio
          </Heading>
          <div className='mt-4 flex flex-col gap-md'>
            <div className='flex items-start'>
              <Text bold>2000</Text>
              <Text className='pl-4'>Born in Kien Giang, Vietnam.</Text>
            </div>
            <div className='flex items-start'>
              <Text bold>2022</Text>
              <Text className='pl-4'>
                Graduated with an Engineer's degree in Software Engineering from
                Can Tho University of Technology and Engineering.
              </Text>
            </div>
            <div className='flex items-start'>
              <Text bold>2022</Text>
              <Text className='pl-4'>Worked at Soin Media! Vietnam</Text>
            </div>
            <div className='flex items-start'>
              <Text bold>2024 to Present</Text>
              <Text className='pl-4'>Working as a freelancer</Text>
            </div>
          </div>
        </Section>

        <Section className='text-left' delay={0.3}>
          <Heading
            size='md'
            bold
            className='text-xl leading-5 underline decoration-[#525252] decoration-4 underline-offset-4'
          >
            I ♥
          </Heading>
          <Text className='mt-4 hyphens-auto text-justify indent-4'>
            Art, Music, Playing Games.
          </Text>
        </Section>

        <Section className='text-left' delay={0.4}>
          <Heading
            size='md'
            bold
            className='text-xl leading-5 underline decoration-[#525252] decoration-4 underline-offset-4'
          >
            On the web
          </Heading>
          <div className='mt-4 flex w-fit flex-col gap-md'>
            <Link target='_blank' to='https://github.com/snmtriet'>
              <Button
                variant='tertiary'
                before={<FaGithub size={20} className='mr-2' />}
              >
                @snmtriet
              </Button>
            </Link>
            <Link target='_blank' to='https://instagram.com/trieest.snm'>
              <Button
                variant='tertiary'
                before={<FaInstagram size={20} className='mr-2' />}
              >
                @snmtriet
              </Button>
            </Link>
            <Link target='_blank' to='https://t.me/snmtriet'>
              <Button
                variant='tertiary'
                before={<FaTelegram size={20} className='mr-2' />}
              >
                @snmtriet
              </Button>
            </Link>
          </div>
        </Section>
      </Container>
    </Article>
  )
}

export default Home
