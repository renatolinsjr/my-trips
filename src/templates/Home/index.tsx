import { NextSeo } from 'next-seo'

import LinkWrapper from 'components/LinkWrapper'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'

import dynamic from 'next/dynamic'
import { MapProps } from 'components/Map'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="My Trips"
        description="Um simples projeto para mostrar no mapa alguns dos lugares que eu gosto."
        canonical="https://my-trips.renatolins.dev.br"
        openGraph={{
          url: 'https://my-trips.renatolins.dev.br',
          title: 'My Trips',
          description:
            'Um simples projeto para mostrar no mapa alguns dos lugares que eu gosto.',
          images: [
            {
              url: 'https://my-trips.renatolins.dev.br/img/cover.png',
              width: 1280,
              height: 720,
              alt: 'My Trips'
            }
          ],
          site_name: 'My Trips'
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
