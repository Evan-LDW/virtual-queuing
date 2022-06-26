import { render, screen } from "@testing-library/react"
import NakedButton from "./NakedButton"

test('renders button without default style', () => {
  render(<NakedButton>Button</NakedButton>)

  const button = screen.getByRole('button', { name: 'Button' })

  expect(button).toBeInTheDocument()
  expect(button).toHaveStyleRule('border', '1px solid transparent')
  expect(button).toHaveStyleRule('background', 'transparent')
  expect(button).toHaveStyleRule('cursor', 'pointer')
  expect(button).toHaveStyleRule('padding', '0')
  expect(button).toHaveStyleRule('outline', '0')
  expect(button).toHaveStyleRule('font-size', 'inherit')
})
