import { useState } from 'react'

export default function LoginForm() {

  let [nickname, setNickname] = useState('')
  let [password, setPassword] = useState('')

  function handleLoginSubmit(e) {
    e.preventDefault()
    console.log({
      nickname,
      password,
    })
  }

  return (
    < div className='tab-pane p-3 fade show active' id='nav-login' role='tabpanel' >
      <form onSubmit={e => handleLoginSubmit(e)}>
        {/* User Nickname */}
        <div className='row g-1 mb-3'>
          <label htmlFor='loginNicknameInput' className='col-3 col-form-label'>Nickname</label>
          <div className='col'>
            <input
              type='text'
              className='form-control'
              id='loginNicknameInput'
              placeholder='Digite seu nickname'
              value={nickname}
              onChange={e => setNickname(e.target.value)}
            />
          </div>
          {/* Password */}
        </div>
        <div className='row g-1 mb-3'>
          <label htmlFor='loginPwdInput' className='col-3 col-form-label'>Password</label>
          <div className='col'>
            <input
              type='password'
              className='form-control'
              id='loginPwdInput'
              placeholder='Digite seu password'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
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
