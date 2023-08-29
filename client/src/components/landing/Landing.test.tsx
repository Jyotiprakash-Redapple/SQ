import React from 'react';
import { render, screen } from '@testing-library/react';

import Landing from './Landing';

describe('Landing Page', () => {
  beforeEach(() => render(<Landing />));

  it('renders landing text', () => {
    expect(screen.getByTestId('landing-text').textContent).toEqual('We help businesses discover the web');
  });

  it('has learn more button', () => {
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
