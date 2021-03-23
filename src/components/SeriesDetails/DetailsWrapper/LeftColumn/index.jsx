
export default function LeftColumn({ children }) {
  return (
    <div className='col-3'>
      <div className='row'>
        {children}
      </div>
    </div>
  )
}
