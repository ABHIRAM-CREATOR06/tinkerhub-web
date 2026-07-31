import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import LocalImage from '@/components/LocalImage';

describe('LocalImage Component', () => {
  it('renders image when src is provided', () => {
    render(<LocalImage src="/images/test.jpg" alt="Test Image" />);
    const img = screen.getByAltText('Test Image');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', '/images/test.jpg');
  });

  it('shows fallback with initials when no src is provided', () => {
    render(<LocalImage alt="John Doe" />);
    const fallback = screen.getByLabelText('John Doe');
    expect(fallback).toBeInTheDocument();
    expect(fallback).toHaveTextContent('J');
  });

  it('shows fallback with emoji when provided', () => {
    render(<LocalImage alt="Test" emoji="🎉" />);
    const fallback = screen.getByLabelText('Test');
    expect(fallback).toHaveTextContent('🎉');
  });

  it('applies circle border radius by default', () => {
    const { container } = render(
      <LocalImage src="/images/test.jpg" alt="Test" />
    );
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper).toHaveStyle({ borderRadius: '50%' });
  });

  it('applies rounded border radius when shape is rounded', () => {
    const { container } = render(
      <LocalImage src="/images/test.jpg" alt="Test" shape="rounded" />
    );
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper).toHaveStyle({ borderRadius: '8px' });
  });

  it('applies square border radius when shape is square', () => {
    const { container } = render(
      <LocalImage src="/images/test.jpg" alt="Test" shape="square" />
    );
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper).toHaveStyle({ borderRadius: '0' });
  });

  it('applies custom gradient background', () => {
    const { container } = render(
      <LocalImage
        src="/images/test.jpg"
        alt="Test"
        gradient="linear-gradient(135deg, #FF0000, #0000FF)"
      />
    );
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper).toHaveStyle({
      background: 'linear-gradient(135deg, #FF0000, #0000FF)',
    });
  });

  it('applies custom className', () => {
    const { container } = render(
      <LocalImage src="/images/test.jpg" alt="Test" className="custom-class" />
    );
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper).toHaveClass('custom-class');
  });

  it('applies custom inline styles', () => {
    const { container } = render(
      <LocalImage
        src="/images/test.jpg"
        alt="Test"
        style={{ width: '200px', height: '200px' }}
      />
    );
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper).toHaveStyle({ width: '200px', height: '200px' });
  });

  it('shows fallback when image fails to load', async () => {
    render(<LocalImage src="/images/invalid.jpg" alt="John Doe" />);
    const img = screen.getByAltText('John Doe') as HTMLImageElement;

    fireEvent.error(img);

    await waitFor(() => {
      const fallback = screen.getByLabelText('John Doe');
      expect(fallback).toBeInTheDocument();
    });
  });

  it('uses question mark when alt text is empty', () => {
    render(<LocalImage alt="" />);
    const fallback = screen.getByLabelText('');
    expect(fallback).toHaveTextContent('?');
  });

  it('trims whitespace from alt text for initials', () => {
    render(<LocalImage alt="  Jane Smith  " />);
    const fallback = screen.getByLabelText('  Jane Smith  ');
    expect(fallback).toHaveTextContent('J');
  });
});
