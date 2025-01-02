import { Container, Heading, Section } from '@/components/shared'
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
        <Container className='mt-4 text-left'>
          <Section>
            <Heading size='md' bold className='text-xl'>
              Works
            </Heading>
            <div className='mt-2 grid grid-cols-1 gap-x-lg gap-y-xl sm:grid-cols-2'>
              <WorkCard
                title='CSGO MT'
                subTitle='Play Roulette, Coinflip, Cases & Case Battles.'
                thumbnail='/images/csgomt-roulette.png'
                link='/works/csgomt'
              />
              {/* <WorkCard
                title='Manga MT'
                subTitle='Free read manga online in high quality. No ads, No registration required. Just enjoy your manga'
                thumbnail='/images/mangamt.png'
                link='/works/mangamt'
              /> */}
            </div>
          </Section>
          <hr className='my-4 border-dark-1' />
          <Section>
            <Heading size='md' bold className='text-xl'>
              Old Works
            </Heading>
            <div className='mt-2 grid grid-cols-1 gap-x-lg gap-y-xl sm:grid-cols-2'>
              <WorkCard
                title='SoinMedia'
                subTitle='Company portfolio website'
                thumbnail='/images/soinmedia.png'
                link='https://www.soinmedia.com'
                target='_blank'
              />
              <WorkCard
                title='Corgi'
                subTitle='Discover, sell and buy NFTs, collections and creator...'
                thumbnail='/images/corgi.png'
                link='https://corgistudio.io'
                target='_blank'
              />
            </div>
          </Section>
        </Container>
      </Article>
    </div>
  )
}

export default Works
