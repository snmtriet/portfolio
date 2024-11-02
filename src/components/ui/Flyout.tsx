import { cn } from '@/utils'
import { Text } from '../shared'
import { NavLink } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'
import { IoCodeSlash } from 'react-icons/io5'

type Props = {
  flyoutOpen: boolean
  toggleFlyout: () => void
}

const Flyout = (props: Props) => {
  const { flyoutOpen, toggleFlyout } = props
  return (
    <>
      <div
        className={cn(
          'fixed right-0 top-[56px] z-30 h-[calc(100vh-56px)] w-[80vw] transition-transform duration-300 ease-in-out',
          !flyoutOpen ? 'translate-x-full' : 'translate-x-0',
        )}
      >
        <div className='flex h-full w-full flex-col justify-between bg-[#e3d0b6] p-lg dark:bg-dark-4'>
          <div className='flex h-full w-full flex-col gap-md'>
            <NavLink
              to='/works'
              className={({ isActive }) =>
                cn(
                  'flex h-[46px] w-full items-center rounded-md bg-light p-lg dark:bg-dark-3',
                  isActive &&
                    'border border-purple-1 text-purple-1 dark:border-yellow-2 dark:text-yellow-2',
                )
              }
            >
              <IoCodeSlash size={20} className='mr-2' />
              <Text>Works</Text>
            </NavLink>
            <NavLink
              target='_blank'
              to='https://github.com/snmtriet'
              className='flex h-[46px] w-full items-center rounded-md bg-light p-lg dark:bg-dark-3'
            >
              <FaGithub size={20} className='mr-2' />
              <Text>View Source</Text>
            </NavLink>
          </div>
          <div className='w-full text-center'>
            <Text size='small' className='text-center opacity-40'>
              &copy; {new Date().getFullYear()} Su Nguyen Minh Triet. All Rights
              Reserved.
            </Text>
          </div>
        </div>
      </div>
      <div
        className={cn(
          'flyout-mask fixed inset-0 top-[56px] z-20 h-[calc(100vh-56px)] bg-[#000000cc] transition-all duration-300 ease-in-out',
          flyoutOpen ? 'opacity-100' : '-z-10 opacity-0',
        )}
        onClick={toggleFlyout}
      ></div>
    </>
  )
}

export default Flyout
