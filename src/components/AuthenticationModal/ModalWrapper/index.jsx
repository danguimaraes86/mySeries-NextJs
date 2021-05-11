
export default function ModalWrapper({ children }) {
  return (
    <div className='modal fade' id='loginModal' tabIndex='-1'>
      <div className='modal-dialog'>
        <div className='modal-content'>
          {children}
        </div>
      </div>
    </div>
  )
}
