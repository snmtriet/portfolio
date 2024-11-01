import { Text } from '../shared'

const Footer = () => {
  return (
    <Text size='medium' className='text-center opacity-40'>
      &copy; {new Date().getFullYear()} Su Nguyen Minh Triet. All Rights
      Reserved.
    </Text>
  )
}

export default Footer
