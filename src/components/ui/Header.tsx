import { cn } from '@/utils'
import { HiOutlineBars3 } from 'react-icons/hi2'
import { LuSunMedium } from 'react-icons/lu'
import { MdOutlineDarkMode } from 'react-icons/md'
import { PiFinnTheHumanDuotone } from 'react-icons/pi'
import { Link } from 'react-router-dom'
import { Button, Heading } from '../shared'
import Nav from './Nav'
import { useTheme } from '@/context/theme.context'

type Props = {
  flyoutOpen: boolean
  toggleFlyout: () => void
}

const Header = (props: Props) => {
  const { flyoutOpen, toggleFlyout } = props
  const { isDarkMode, toggleDarkMode } = useTheme()

  return (
    <div className='fixed left-1/2 z-50 mx-auto flex w-full -translate-x-1/2 items-center justify-center bg-[#ffffff40] p-md backdrop-blur-md dark:bg-[#22222480]'>
      <div className='flex w-full max-w-3xl items-center justify-between'>
        <div data-test='logo' className='mr-xl'>
          <Heading size='xl' bold>
            <Link to='/' className='group flex items-center'>
              <PiFinnTheHumanDuotone size={20} className='mr-1' />
              <p className='text-[18px]'>snmtriet</p>
            </Link>
          </Heading>
        </div>
        <Nav />
        <div data-test='actions' className='flex items-center'>
          <Button
            variant={isDarkMode ? 'secondary' : 'primary'}
            className='flex h-40 w-40 items-center justify-center rounded p-md'
            onClick={toggleDarkMode}
          >
            {isDarkMode ? (
              <LuSunMedium size={20} />
            ) : (
              <MdOutlineDarkMode size={20} />
            )}
          </Button>
          <div data-test='bar' className='ml-md md:hidden'>
            <button
              className={cn(
                'h-40 w-40 rounded border p-md transition-all',
                flyoutOpen
                  ? 'border-purple-1 text-purple-1 dark:border-yellow-2 dark:text-yellow-2'
                  : 'border-light-grey-3 text-current',
              )}
              onClick={toggleFlyout}
            >
              <HiOutlineBars3 className='h-full w-full' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
