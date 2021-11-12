import { fireEvent, render } from '@testing-library/react';
import Demo from '../../src/demo'

describe('Test example for index', function () {
  it('should have a button which text is Click this', function () {
    const renderResult = render(<Demo text={'Click this'}/>);
    const button = renderResult.getByText(/Click this/i);
    const text = renderResult.getByText(/You clicked 0 times/i);
    expect(text).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    const textAfterClick = renderResult.getByText(/You clicked 1 times/i);
    expect(textAfterClick).toBeInTheDocument();
  });
});
