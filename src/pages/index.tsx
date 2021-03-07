import dynamic from 'next/dynamic'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function Home() {
  return (
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
  )
}
