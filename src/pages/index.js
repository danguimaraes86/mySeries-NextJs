import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import TrendingWrapper from '../components/TrendingWrapper'
import SeriesCard from '../components/SeriesCard'

export default function Home({ trending }) {

  function handleTrendingSeries(data) {
    return data.map((series) => {
      return (
        <SeriesCard
          key={series.id}
          name={series.name}
          poster={series.poster_path}
          year={series.first_air_date}
        />
      )
    })
  }

  return (
    <Layout>
      <Navbar />
      <TrendingWrapper>
        { handleTrendingSeries(trending) }
      </TrendingWrapper>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch('http://localhost:3000/api/trending')
  const { results: trending } = await res.json()

  return {
    props: {
      trending
    }
  }
}