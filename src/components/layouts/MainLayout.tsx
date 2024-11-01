import Views from '@/views/Views'
import Footer from '../ui/Footer'
import Header from '../ui/Header'
import Flyout from '../ui/Flyout'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import VoxelDog from '../ui/VoxelDog'

const MainLayout = () => {
  const [flyoutOpen, setFlyoutOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    if (!flyoutOpen) return
    toggleFlyout()
  }, [pathname])

  function toggleFlyout() {
    setFlyoutOpen((prev) => !prev)
  }

  return (
    <main className='min-h-screen px-lg pb-md'>
      <Header flyoutOpen={flyoutOpen} toggleFlyout={toggleFlyout} />
      <div className='mx-auto min-h-screen w-full max-w-3xl px-xl pt-16 text-center'>
        <VoxelDog />
        <Views />
      </div>
      <Flyout flyoutOpen={flyoutOpen} toggleFlyout={toggleFlyout} />
      <Footer />
    </main>
  )
}

export default MainLayout
