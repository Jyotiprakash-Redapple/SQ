import React from 'react';
import { render, screen } from '@testing-library/react';

import Navigation from './Navigation';

describe('Navigation', () => {
  beforeEach(() => render(<Navigation />));

  it('should contain navigation', () => {
    const navigation = screen.getByRole('navigation');

    expect(navigation).toBeInTheDocument();
  });

  it('renders logo', () => {
    const logo = screen.getByTestId('logo');

    expect(logo).toBeInTheDocument();
  });

  it('should contain nav links', (): void => {
    const expectedLinks: Array<string> = ['home', 'what we do', 'work', 'contact me'];

    for (let i = 0; i < expectedLinks.length; i += 1) {
      const link: HTMLElement = screen.getByText(expectedLinks[i], { exact: false });

      expect(link).toBeInTheDocument();
    }
  });
});
