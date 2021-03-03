import MySeriesLogo from './mySeriesLogo'
import SearchForm from './SearchForm'
import Login from './Login'

export default function NavBar() {
  return (
    <nav className='navbar navbar-dark bg-dark rounded-bottom px-3'>
      <MySeriesLogo />
      <div className='d-flex justify-content-between'>
        <SearchForm />
        <Login />
      </div>
    </nav>
  )
}
