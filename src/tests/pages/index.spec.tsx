import { render, screen } from '../test-utils';
import Home from '@app/pages/index';

describe('Pages -> Home', () => {
  it('renders homepage unchanged', () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });

  it('should render the heading', () => {
    render(<Home />);
    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
