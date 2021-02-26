import MySeriesLogo from './mySeriesLogo'
import SearchForm from './SearchForm'
import Login from './Login'

export default function NavBar() {
  return (
    <nav className='container-fluid navbar navbar-dark bg-dark rounded-bottom'>
      <MySeriesLogo />
      <div className='d-flex justify-content-between'>
        <SearchForm />
        <Login />
      </div>
    </nav>
  )
}
