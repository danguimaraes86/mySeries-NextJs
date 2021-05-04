
export default function LoginForm() {
  return (
    < div className='tab-pane p-3 fade show active' id='nav-login' role='tabpanel' >
      <form>
        {/* User ID */}
        <div className='row g-1 mb-3'>
          <label htmlFor='loginIDInpunt' className='col-3 col-form-label'>Usuário ID</label>
          <div className='col'>
            <input type='text' className='form-control' id='loginIDInpunt' />
          </div>
          {/* Password */}
        </div>
        <div className='row g-1 mb-3'>
          <label htmlFor='loginPwdInput' className='col-3 col-form-label'>Password</label>
          <div className='col'>
            <input type='password' className='form-control' id='loginPwdInput' />
          </div>
        </div>
        {/* Submit Button */}
        <div className='d-flex justify-content-end'>
          <button type='submit' className='btn btn-dark text-info'>
            <span className='me-1'>
              Login
              </span>
            <i className="bi bi-caret-right" />
          </button>
        </div>
      </form>
    </div >
  )
}
