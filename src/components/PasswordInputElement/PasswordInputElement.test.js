import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import PasswordInputElement from "./PasswordInputElement"

test('renders password input as default and renders text input when toggle password visibility', () => {
  render(<PasswordInputElement placeholder="Password" />)

  expect(screen.getByPlaceholderText('Password')).toHaveAttribute('type', 'password')

  userEvent.click(screen.getByAltText('invisible'))

  expect(screen.getByPlaceholderText('Password')).toHaveAttribute('type', 'text')
})
