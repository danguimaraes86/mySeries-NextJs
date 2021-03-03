
export default function CardsWapper({ children, title }) {
  return (
    <main className='border rounded-top p-3 mt-2'>
      <h5 className='display-5'>
        {title}
      </h5>
      <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3'>
        {children}
      </div>
    </main>
  )
}
