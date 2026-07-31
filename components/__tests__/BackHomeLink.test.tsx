import React from 'react';
import { render, screen } from '@testing-library/react';
import BackHomeLink from '@/components/BackHomeLink';

describe('BackHomeLink Component', () => {
  it('renders the back home link', () => {
    render(<BackHomeLink />);
    const link = screen.getByRole('link', { name: /back to home/i });
    expect(link).toBeInTheDocument();
  });

  it('has correct href attribute', () => {
    render(<BackHomeLink />);
    const link = screen.getByRole('link', { name: /back to home/i });
    expect(link).toHaveAttribute('href', '/');
  });

  it('applies default button styling classes', () => {
    render(<BackHomeLink />);
    const link = screen.getByRole('link', { name: /back to home/i });
    expect(link).toHaveClass('btn', 'btn--outline');
  });

  it('accepts and applies custom className', () => {
    render(<BackHomeLink className="custom-class" />);
    const link = screen.getByRole('link', { name: /back to home/i });
    expect(link).toHaveClass('btn', 'btn--outline', 'custom-class');
  });

  it('renders with left arrow icon', () => {
    render(<BackHomeLink />);
    const link = screen.getByRole('link', { name: /back to home/i });
    expect(link.textContent).toContain('←');
  });
});
