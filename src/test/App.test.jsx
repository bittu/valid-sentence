import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

// const setup = () => {
//   const utils = render(<App />)
//   const input = utils.getByLabelText('cost-input')
//   return {
//     input,
//     ...utils,
//   }
// }

describe('On page load', () => {
  it('the title is visible', () => {
    render(<App />);
    expect(screen.getByText("Validate a sentence")).toBeInTheDocument();
  })

  it('input should be present', async () => {
    render(<App />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  })

  it('updates entered value', async () => {
    render(<App />)
    const input = screen.getByRole('textbox');
    await userEvent.type(input, "hello");
    expect(input.value).toBe('hello');
  })

  it('should show error if input is empty and enter key is pressed', async () => {
    render(<App />)
    const input = screen.getByRole('textbox');
    await userEvent.type(input, "{enter}");
    expect(input.value).toBe('');
    expect(screen.getByText("Please enter sentence to validate")).toHaveClass('show');
  })

  it('should show invalid status on invalid sentence', async () => {
    render(<App />)
    const input = screen.getByRole('textbox');
    await userEvent.type(input, "hello{enter}");
    expect(input.value).toBe('hello');
    expect(input.parentElement).toHaveClass('invalid');
  })

  it('should show valid status on valid sentence', async () => {
    render(<App />)
    const input = screen.getByRole('textbox');
    await userEvent.type(input, "Hello.{enter}");
    expect(input.value).toBe('Hello.');
    expect(input.parentElement).toHaveClass('valid');
  })
})