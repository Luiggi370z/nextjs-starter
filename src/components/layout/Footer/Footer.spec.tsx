import { render, screen } from '@app/tests/test-utils';
import Footer from './Footer';

describe('Components -> Layout -> Footer', () => {
  it('should render the footer', () => {
    render(<Footer />);
    const text = screen.getByText(/my custom footer/i);

    expect(text).toBeInTheDocument();
  });
});
