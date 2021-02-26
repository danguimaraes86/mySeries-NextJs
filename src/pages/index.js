import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import ContentWrapper from '../components/ContentWrapper'

export default function Home() {
  return (
    <Layout>
      <Navbar />
      <ContentWrapper>
        <h1>mySeries</h1>
      </ContentWrapper>
    </Layout>
  )
}
