import { cn } from '@/utils'
import { FaGithub } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div data-test='nav' className='hidden flex-1 md:block'>
      <div className='flex w-auto items-center gap-lg'>
        <NavLink
          to='/works'
          className={({ isActive }) =>
            cn(
              'rounded-md p-md text-large font-normal underline-offset-4 transition-all duration-150 ease-in-out hover:underline',
              {
                'bg-dark text-light-1 dark:bg-light dark:text-dark': isActive,
              },
            )
          }
        >
          Works
        </NavLink>
        <NavLink
          target='_blank'
          to='https://github.com/snmtriet'
          className='flex items-center gap-md p-md text-large font-normal underline-offset-4 hover:underline'
        >
          <FaGithub size={20} />
          Source
        </NavLink>
      </div>
    </div>
  )
}

export default Nav
