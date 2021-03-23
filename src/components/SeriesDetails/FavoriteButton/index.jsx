
export default function FavoriteButton() {
  return (
    <div className='col-12'>
      <button className='btn btn-outline-dark w-100'>
        <span className='d-none d-md-inline-block me-1'>Favorito</span>
        <i className='bi bi-bookmark-star' />
      </button>
    </div>
  )
}
