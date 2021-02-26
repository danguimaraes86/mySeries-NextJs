import Link from 'next/link'

export default function mySeriesLogo() {
  return (
    <Link href='/'>
      <a>
        <div className='navbar-brand text-info'>
          <i className='bi bi-tv me-md-2' />
          <span className='d-none d-md-inline-block'>
            mySeries
          </span>
        </div>
      </a>
    </Link>
  )
}
