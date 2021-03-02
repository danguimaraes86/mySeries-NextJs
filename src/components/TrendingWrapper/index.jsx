
export default function TrendingWapper({ children }) {
  return (
    <main className='border rounded-top p-2 mt-2'>
      <h5 className='display-5'>Em alta <i className="bi bi-graph-up" /></h5>
      <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-2'>
        { children }
      </div>
    </main>
  )
}
