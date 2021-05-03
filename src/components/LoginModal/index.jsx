
export default function LoginModal() {
  return (
    <div className='modal fade' id='loginModal' tabIndex='-1'>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='loginModalLabel'>Login ou Cadastro</h5>
            <button type='button' className='btn-close' data-bs-dismiss='modal' />
          </div>

          <div className='modal-body'>
            <div className="nav nav-tabs nav-fill" role="tablist">
              <div className="nav-link active" id="nav-login-tab" data-bs-toggle="tab" data-bs-target="#nav-login" type="button" role="tab">Login</div>
              <div className="nav-link" id="nav-create-tab" data-bs-toggle="tab" data-bs-target="#nav-create" type="button" role="tab">Cadastro</div>
            </div>

            <div className="tab-content">
              <div className="tab-pane fade show active" id="nav-login" role="tabpanel">
                <p>Login</p>
              </div>
              <div className="tab-pane fade" id="nav-create" role="tabpanel">
                <p>Create</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}
