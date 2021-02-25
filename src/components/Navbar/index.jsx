import MySeriesLogo from './mySeriesLogo'
import SearchForm from './SearchForm'

export default function NavBar() {
  return (
    <nav className='container-fluid navbar navbar-dark bg-dark'>
      <MySeriesLogo />
      <SearchForm />
    </nav>
  )
}
