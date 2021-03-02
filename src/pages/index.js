import axios from 'axios'

import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import TrendingWrapper from '../components/TrendingWrapper'
import SeriesCard from '../components/SeriesCard'

export default function Home({ trending }) {

  function handleTrendingSeries(data) {
    return data.map((series, index) => {
      return (
        <SeriesCard
          key={index}
          id={series.id}
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
  const url = `${process.env.APP_BASEURL}/api/trending`
  const res = await axios.get(url)

  return {
    props: {
      trending: res.data.results
    }
  }
}