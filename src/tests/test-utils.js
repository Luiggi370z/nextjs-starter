import { render } from '@testing-library/react';

// Add in any providers here if necessary:
const Providers = ({ children }) => {
  return children;
};

const customRender = (ui, options = {}) => render(ui, { wrapper: Providers, ...options });

export * from '@testing-library/react';

export { customRender as render };
