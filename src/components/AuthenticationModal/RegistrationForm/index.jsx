import { useState } from 'react'
import { apiFetcher } from '../../../libs/axios'

export default function LoginForm() {

  let [nickname, setNickname] = useState('')
  let [userFirstName, setUserFirstName] = useState('')
  let [userLastName, setUserLastName] = useState('')
  let [password, setPassword] = useState('')
  let [passwordConfirmation, setPasswordConfirmation] = useState('')

  async function handleRegistrationSubmit(e) {
    e.preventDefault()
    const newUser = {
      nickname,
      userFirstName,
      userLastName,
      password,
      passwordConfirmation
    }
    const result = await apiFetcher('/api/user/create', 'POST', newUser)
    console.log(result);
  }

  return (
    <div className='tab-pane p-3 fade' id='nav-registration' role='tabpanel'>
      <form onSubmit={e => handleRegistrationSubmit(e)}>
        {/* User Nickname */}
        <div className='row g-1 mb-3'>
          <label className=' col-3 col-form-label' htmlFor='registrationNicknameInput'>Nickname</label>
          <div className='col'>
            <input
              type='text'
              className='form-control'
              id='registrationNicknameInput'
              placeholder='Escolha um nickname'
              value={nickname}
              onChange={e => setNickname(e.target.value)}
            />
          </div>
          <div className='col-9 offset-3 form-text'>
            Mínimo de 6 caracteres
            </div>
        </div>
        {/* User Name */}
        <div className='row g-1 mb-3'>
          <label className=' col-3 col-form-label' htmlFor='registrationNameInpunt'>Nome</label>
          <div className='col input-group'>
            <input
              type='text'
              className='form-control'
              id='registrationNameInpunt'
              placeholder='Nome'
              value={userFirstName}
              onChange={e => setUserFirstName(e.target.value)}
            />
            <input type='text'
              className='form-control'
              id='registrationLastNameInpunt'
              placeholder='Sobrenome'
              value={userLastName}
              onChange={e => setUserLastName(e.target.value)}
            />
          </div>
        </div>
        {/* Password */}
        <div className='row g-1 mb-3'>
          <label className='col-3 col-form-label' htmlFor='passwordInput' >Password</label>
          <div className='col'>
            <input
            type='password'
            className='form-control'
            id='passwordInput'
            placeholder='Digite seu password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className='col-9 offset-3'>
            <input
            type='password'
            className='form-control'
            id='passwordConfirmationInput'
            placeholder='Confirme seu password'
            value={passwordConfirmation}
            onChange={e => setPasswordConfirmation(e.target.value)}
            />
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
            <i className='bi bi-person-plus-fill' />
          </button>
        </div>
      </form>
    </div>
  )
}
