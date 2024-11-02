import { Button, Container, Heading, Text } from '@/components/shared'
import { useTheme } from '@/context/theme.context'
import { Link } from 'react-router-dom'

const NotFound = () => {
  const { isDarkMode } = useTheme()
  return (
    <Container className='text-left'>
      <Heading size='xl' bold className='text-5xl'>
        Not found
      </Heading>
      <Text>The page you&apos;re looking for was not found.</Text>
      <hr className='my-4 border-dark-1' />
      <div className='flex items-center justify-center'>
        <Link to='/' className=''>
          <Button variant={isDarkMode ? 'secondary' : 'primary'}>
            Back to homepage
          </Button>
        </Link>
      </div>
    </Container>
  )
}

export default NotFound
