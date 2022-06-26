import NakedButton from '../../../NakedButton'
import eyeLine from './assets/eye-line.svg'
import eyeCloseLine from './assets/eye-close-line.svg'

const PasswordVisibilityToggle = ({
  visible,
  onToggle,
}) => (
  <NakedButton
    type="button"
    onClick={() => onToggle(!visible)}
  >
    {visible ? (
      <img alt="visible" src={eyeLine} />
    ) : (
      <img alt="invisible" src={eyeCloseLine} />
    )}
  </NakedButton>
)

export default PasswordVisibilityToggle
