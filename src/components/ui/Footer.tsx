import { Text } from '../shared'

const Footer = () => {
  return (
    <div className='pt-4'>
      <Text size='medium' className='text-center opacity-60'>
        &copy; {new Date().getFullYear()} Su Nguyen Minh Triet. All Rights
        Reserved.
      </Text>
    </div>
  )
}

export default Footer
