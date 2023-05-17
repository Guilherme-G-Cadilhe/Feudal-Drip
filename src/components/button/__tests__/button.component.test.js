import { render, screen } from '@testing-library/react'
import Button, { BUTTON_TYPE_CLASSES } from '../button.component'

describe('button tests', () => {

  test("should render base button when nothing is passed", () => {
    render(<Button>Teste</Button>)
    // const buttomElement = screen.getByText(/test/i); // case indifferent
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveStyle('background-color: black');
  })

  it('should render google button when passed google props', () => {
    render(<Button buttonType={BUTTON_TYPE_CLASSES.google} />)

    const googleButtonElement = screen.getByRole('button');
    expect(googleButtonElement).toHaveStyle('background-color: #4285f4');
  })

  it('should render inverted button when passed inverted props', () => {
    render(<Button buttonType={BUTTON_TYPE_CLASSES.inverted} />)

    const invertedButton = screen.getByRole('button');
    expect(invertedButton).toHaveStyle('background-color: white');
  })

  it('should be disabled if isLoading is true', () => {
    render(<Button isLoading={true} />)

    const disabledButton = screen.getByRole('button');
    expect(disabledButton).toBeDisabled();

  });


})