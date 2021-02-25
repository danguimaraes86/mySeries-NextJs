
export default function Login() {
  return (
    <>
      <button className='btn btn-outline-info' type='button' data-toggle='modal' data-target='#form-login'>Login</button>
      {/* <!-- Modal Cadastro --> */}
      <div className='modal fade' id='form-login' tabIndex='-1'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title'>Login</h5>
              <button type='button' className='close' data-dismiss='modal'>
                <span>&times;</span>
              </button>
            </div>
            <form action='' method=''>
              <div className='modal-body'>
                <div className='form-row'>
                  <div className='col-5'>
                    <input type='text' className='form-control' name='nickname' placeholder='Escolha seu nickname...' />
                  </div>
                  <div className='col-5'>
                    <input type='password' className='form-control' name='senha' placeholder='Escolha sua senha...' />
                  </div>
                  <div className='col-2'>
                    <button type='submit' className='btn btn-primary w-100'>
                      <i className='fas fa-paper-plane'></i>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <!-- / Modal Cadastro --></div> */}
    </>
  )
}
