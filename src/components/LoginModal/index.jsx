
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
              <div className='nav-link rounded-0' id='nav-registration-tab' data-bs-toggle='tab' data-bs-target='#nav-registration' type='button' role='tab'>Cadastro</div>
            </div>

            <div className='tab-content'>

              {/* Login Panel */}
              <div className='tab-pane p-3 fade show active' id='nav-login' role='tabpanel'>
                <form>
                  <div className='row g-1 mb-3'>
                    <label htmlFor='loginIDInpunt' className='col-3 col-form-label'>Usuário ID</label>
                    <div className='col'>
                      <input type='text' className='form-control' id='loginIDInpunt' />
                    </div>
                  </div>
                  <div className='row g-1 mb-3'>
                    <label htmlFor='loginPwdInput' className='col-3 col-form-label'>Password</label>
                    <div className='col'>
                      <input type='password' className='form-control' id='loginPwdInput' />
                    </div>
                  </div>
                  <div className='d-flex justify-content-end'>
                    <button type='submit' className='btn btn-dark text-info'>
                      <span className='me-1'>
                        Login
                      </span>
                      <i className="bi bi-caret-right" />
                    </button>
                  </div>
                </form>
              </div>

              {/* Registration Panel */}
              <div className='tab-pane p-3 fade' id='nav-registration' role='tabpanel'>
                <form>
                  {/* User ID */}
                  <div className='row g-1 mb-3'>
                    <label className=' col-3 col-form-label' htmlFor='registrationIDInpunt'>Usuário ID</label>
                    <div className='col'>
                      <input type='text' className='form-control' id='registrationIDInpunt' placeholder='Escolha um ID para seu usuário' />
                    </div>
                    <div className='col-9 offset-3 form-text'>
                      Mínimo de 6 caracteres
                    </div>
                  </div>
                  {/* User Name */}
                  <div className='row g-1 mb-3'>
                    <label className=' col-3 col-form-label' htmlFor='registrationNameInpunt'>Nome</label>
                    <div className='col input-group'>
                      <input type='text' className='form-control' id='registrationNameInpunt' placeholder='Nome' />
                      <input type='text' className='form-control' id='registrationLastNameInpunt' placeholder='Sobrenome' />
                    </div>
                  </div>
                  {/* Password */}
                  <div className='row g-1 mb-3'>
                    <label className='col-3 col-form-label' htmlFor='passwordInput' >Password</label>
                    <div className='col'>
                      <input type='password' className='form-control' id='passwordInput' placeholder='Digite seu password' />
                    </div>
                    <div className='col-9 offset-3'>
                      <input type='password' className='form-control' id='passwordConfirmationInput' placeholder='Confirme seu password' />
                    </div>
                    <div className='col-9 offset-3 form-text'>
                      Mínimo de 6 caracteres
                    </div>
                  </div>
                  {/* Submit Button */}
                  <div className='d-flex justify-content-end'>
                    <button type='submit' className='btn btn-primary'>
                      <span className='me-2'>
                        Cadastrar
                      </span>
                      <i className="bi bi-person-plus-fill" />
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
