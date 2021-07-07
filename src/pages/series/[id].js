import tmdbRequest from '../../libs/tmdbRequest'
import { getYear } from '../../libs/dateParsing'

import DetailsWrapper from '../../components/SeriesDetails/DetailsWrapper'
import LeftColumn from '../../components/SeriesDetails/DetailsWrapper/LeftColumn'
import RightColumn from '../../components/SeriesDetails/DetailsWrapper/RightColumn'

import PosterCard from '../../components/SeriesDetails/PosterCard'
import FavoriteButton from '../../components/SeriesDetails/FavoriteButton'
import SeriesTitle from '../../components/SeriesDetails/SeriesTitle'
import SeriesOverview from '../../components/SeriesDetails/SeriesOverview'
import NetworksAndStreaming from '../../components/SeriesDetails/NetworksAndStreaming'

export default function SeriesDetails({ series }) {

  return (
    <DetailsWrapper>
      <LeftColumn>
        <PosterCard
          url={`https://image.tmdb.org/t/p/w500/${series.poster_path}`}
          name={series.name}
        />
        <FavoriteButton />
      </LeftColumn>

      <RightColumn>
        <SeriesTitle
          name={series.name}
          original_name={series.original_name}
          original_language={series.original_language}
          year={getYear(series.first_air_date)}
        />

        <SeriesOverview
          overview={series.overview}
          type={series.type}
          first_air_date={series.first_air_date}
          number_of_seasons={series.number_of_seasons}
          status={series.status}
        />

        <NetworksAndStreaming
          network={series.networks[0]}
          providers={series.providers}
        />
      </RightColumn>
    </DetailsWrapper>
  )
}

export async function getServerSideProps(context) {
  const { id } = context.query
  const params = {
    language: 'pt-BR',
    append_to_response: 'external_ids'
  }
  const series = await tmdbRequest(`/tv/${id}`, params)
  series['providers'] = []

  const { results: providers } = await tmdbRequest(`/tv/${id}/watch/providers`)
  if (providers.hasOwnProperty('BR')) {
    if (providers.BR.hasOwnProperty('flatrate')) {
      series.providers.push(...providers.BR.flatrate)
    }
    if (providers.BR.hasOwnProperty('ads')) {
      series.providers.push(...providers.BR.ads)
    }
  }

  return {
    props: {
      series
    }
  }
}