import Link from 'next/link'

export default function mySeriesLogo() {
  return (
    <Link href='/'>
      <a>
        <div className='navbar-brand text-info'>
          <i className='bi bi-tv me-sm-2' />
          <span className='d-none d-sm-inline-block'>
            mySeries
          </span>
        </div>
      </a>
    </Link>
  )
}
