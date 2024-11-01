import { Heading } from '@/components/shared'
import Article from '@/components/ui/Article'
import WorkCard from '@/components/ui/WorkCard'
import { useEffect } from 'react'

const Works = () => {
  useEffect(() => {
    document.title = 'Su Nguyen Minh Triet - Works'
  }, [])
  return (
    <div>
      <Article>
        <div className='mx-auto mt-4 w-full max-w-xl text-left md:px-xl'>
          <Heading size='md' bold className='text-xl'>
            Works
          </Heading>
          <div className='mt-2 grid grid-cols-1 gap-x-lg gap-y-xl sm:grid-cols-2'>
            <WorkCard
              title='CSGO MT'
              subTitle='Play Roulette, Coinflip, Cases & Case Battles'
              thumbnail='/images/csgomt-site.png'
              link='https://csgomt.vercel.app'
            />
          </div>
        </div>
      </Article>
    </div>
  )
}

export default Works
