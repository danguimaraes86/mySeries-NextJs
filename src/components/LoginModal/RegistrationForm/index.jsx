
export default function LoginForm() {
  return (
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
  )
}
