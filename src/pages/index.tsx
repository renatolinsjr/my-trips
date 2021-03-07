import LinkWrapper from 'components/LinkWrapper'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'

import dynamic from 'next/dynamic'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function Home() {
  return (
    <>
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map
        places={[
          {
            id: '1',
            name: 'Reykjavik',
            slug: 'reykjavik',
            location: {
              latitude: -20,
              longitude: -50
            }
          }
        ]}
      />
    </>
  )
}
