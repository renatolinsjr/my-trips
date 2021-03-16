import { useRouter } from 'next/dist/client/router'
import { MapContainer, TileLayer, Marker, MapConsumer } from 'react-leaflet'

import * as S from './styles'

type Place = {
  id: string
  name: string
  slug: string
  location: {
    latitude: number
    longitude: number
  }
}

export type MapProps = {
  places?: Place[]
}

const Map = ({ places }: MapProps) => {
  const router = useRouter()

  return (
    <S.MapWrapper>
      <MapContainer
        center={[0, 0]}
        zoom={3}
        style={{ height: '100%', width: '100%' }}
        minZoom={3}
        maxBounds={[
          [-180, 180],
          [180, -180]
        ]}
      >
        <MapConsumer>
          {(map) => {
            const width =
              window.innerWidth ||
              document.documentElement.clientWidth ||
              document.body.clientWidth
            if (width < 768) {
              map.setMinZoom(2)
            }
            return null
          }}
        </MapConsumer>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {places?.map(({ id, slug, name, location }) => {
          const { latitude, longitude } = location

          return (
            <Marker
              key={`place-${id}`}
              position={[latitude, longitude]}
              title={name}
              eventHandlers={{
                click: () => {
                  router.push(`/place/${slug}`)
                }
              }}
            />
          )
        })}
      </MapContainer>
    </S.MapWrapper>
  )
}

export default Map
