import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import PasswordVisibilityToggle from "./PasswordVisibilityToggle"
import eyeLine from './assets/eye-line.svg'
import eyeCloseLine from './assets/eye-close-line.svg'

const onToggle = jest.fn()

afterEach(() => {
  jest.resetAllMocks()
})

test('renders visible when the toggle is on visible and toggles invisible(false) on click', () => {
  render(<PasswordVisibilityToggle visible onToggle={onToggle} />)

  const visible = screen.getByAltText('visible')

  expect(visible).toBeInTheDocument()
  expect(visible).toHaveAttribute('src', eyeLine)
  expect(screen.getAllByRole('img')).toHaveLength(1)

  userEvent.click(visible)

  expect(onToggle).toBeCalledWith(false)
})

test('renders invisible when toggle is not on visible and toggles visible(true) on click', () => {
  render(<PasswordVisibilityToggle onToggle={onToggle} />)

  const invisible = screen.getByAltText('invisible')

  expect(invisible).toBeInTheDocument()
  expect(invisible).toHaveAttribute('src', eyeCloseLine)
  expect(screen.getAllByRole('img')).toHaveLength(1)

  userEvent.click(invisible)

  expect(onToggle).toBeCalledWith(true)
})
