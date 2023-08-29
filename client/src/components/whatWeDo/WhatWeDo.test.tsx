import React from 'react';
import { render, screen } from '@testing-library/react';

import WhatWeDo from './WhatWeDo';

describe('What We Do page', () => {
  beforeEach(() => render(<WhatWeDo />));

  it('should contain title', () => {
    const title = screen.getByRole('heading', { name: 'What We Do', exact: false });

    expect(title).toBeInTheDocument();
  });

  it('should contain text', () => {
    expect(screen.getByTestId('what-we-do-text').textContent).toEqual('We build stunning websites that effectively connects your customers with your brand');
  });

  it('should contain learn how button', () => {
    const learnMoreButton = screen.getByRole('button', { name: 'learn how' });

    expect(learnMoreButton).toBeInTheDocument();
  });
});
