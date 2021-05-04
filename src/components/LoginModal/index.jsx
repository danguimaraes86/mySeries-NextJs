import ModalWrapper from './ModalWrapper'
import ModalHeader from './ModalHeader'
import BodyWrapper from './BodyWrapper'
import TabSelector from './TabSelector'
import LoginForm from './LoginForm'
import RegistrationForm from './RegistrationForm'

export default function LoginModal() {
  return (
    <ModalWrapper>
      <ModalHeader />
      <BodyWrapper>
        <TabSelector>

          <LoginForm />
          <RegistrationForm />

        </TabSelector>
      </BodyWrapper>
    </ModalWrapper>
  )
}
