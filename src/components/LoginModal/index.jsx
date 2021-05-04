
export default function LoginModal() {
  return (
    <div className='modal fade' id='loginModal' tabIndex='-1'>
      <div className='modal-dialog'>
        <div className='modal-content'>

          <div className='modal-header bg-dark text-info border-0'>
            <h5 className='modal-title' id='loginModalLabel'>Login / Cadastro</h5>
            <button type='button' className='btn-close btn-close-white' data-bs-dismiss='modal' />
          </div>

          <div className='modal-body p-0'>
            <div className='nav nav-tabs nav-fill' role='tablist'>
              <div className='nav-link rounded-0 active' id='nav-login-tab' data-bs-toggle='tab' data-bs-target='#nav-login' type='button' role='tab'>Login</div>
              <div className='nav-link rounded-0' id='nav-create-tab' data-bs-toggle='tab' data-bs-target='#nav-create' type='button' role='tab'>Cadastro</div>
            </div>

            <div className='tab-content'>
              <div className='tab-pane p-3 fade show active' id='nav-login' role='tabpanel'>
                <form>
                  <div className='row mb-3'>
                    <label htmlFor='loginIdInpunt' className='col-3 col-form-label'>Usuário ID</label>
                    <div className='col'>
                      <input type='text' className='form-control' id='loginIdInpunt' />
                    </div>
                  </div>
                  <div className='row mb-3'>
                    <label htmlFor='passwordInput' className='col-3 col-form-label'>Password</label>
                    <div className='col'>
                      <input type='password' className='form-control' id='passwordInput' />
                    </div>
                  </div>
                  <div className='d-flex justify-content-end'>
                    <button type='submit' className='btn btn-dark text-info'>
                      <span className='me-1'>
                        Login
                      </span>
                      <i class="bi bi-caret-right" />
                    </button>
                  </div>
                </form>
              </div>
              <div className='tab-pane p-3 fade' id='nav-create' role='tabpanel'>
                <form>
                  <div className='row mb-3'>
                    <label htmlFor='loginIdInpunt' className='col-3 col-form-label'>Usuário ID</label>
                    <div className='col'>
                      <input type='text' className='form-control' id='loginIdInpunt' />
                    </div>
                  </div>
                  <div className='row mb-3'>
                    <label htmlFor='passwordInput' className='col-3 col-form-label'>Password</label>
                    <div className='col'>
                      <input type='password' className='form-control' id='passwordInput' />
                    </div>
                  </div>
                  <div className='d-flex justify-content-end'>
                    <button type='submit' className='btn btn-primary'>
                      <span className='me-2'>
                        Cadastrar
                      </span>
                      <i class="bi bi-person-plus-fill" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
