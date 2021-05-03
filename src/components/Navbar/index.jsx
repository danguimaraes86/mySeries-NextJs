import MySeriesLogo from './mySeriesLogo'
import SearchForm from './SearchForm'
import LoginButton from './LoginButton'

export default function NavBar() {
  return (
    <nav className='navbar sticky-top navbar-dark bg-dark rounded-bottom px-3'>
      <MySeriesLogo />
      <div className='d-flex justify-content-between'>
        <SearchForm />
        <LoginButton />
      </div>
    </nav>
  )
}
