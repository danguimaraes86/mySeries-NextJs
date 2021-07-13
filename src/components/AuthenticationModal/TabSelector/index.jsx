
export default function TabSelector({ children }) {
  return (
    <>
      <div className='nav nav-tabs nav-fill' role='tablist'>
        <div className='btn nav-item nav-link rounded-0 active' id='nav-login-tab' data-bs-toggle='tab' data-bs-target='#nav-login' role='tab'>Login</div>
        <div className='btn nav-item nav-link rounded-0' id='nav-registration-tab' data-bs-toggle='tab' data-bs-target='#nav-registration' role='tab'>Cadastro</div>
      </div>

      <div className='tab-content'>
        {children}
      </div>
    </>
  )
}
