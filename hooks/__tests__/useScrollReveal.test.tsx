import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

describe('useScrollReveal Hook', () => {
  let mockObserverCallback: IntersectionObserverCallback;
  let mockObserver: {
    observe: jest.Mock;
    unobserve: jest.Mock;
    disconnect: jest.Mock;
  };

  beforeEach(() => {
    mockObserverCallback = jest.fn();
    mockObserver = {
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    };

    (global.IntersectionObserver as any) = jest.fn(
      (callback: IntersectionObserverCallback) => {
        mockObserverCallback = callback;
        return mockObserver;
      }
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  function TestComponent({ threshold }: { threshold?: number }) {
    const ref = useScrollReveal(threshold);
    return <div ref={ref}>Test</div>;
  }

  it('creates IntersectionObserver with default threshold', async () => {
    render(<TestComponent />);

    await waitFor(() => {
      expect(global.IntersectionObserver).toHaveBeenCalledWith(
        expect.any(Function),
        expect.objectContaining({
          threshold: 0.15,
          rootMargin: '0px 0px -40px 0px',
        })
      );
    });
  });

  it('creates IntersectionObserver with custom threshold', async () => {
    render(<TestComponent threshold={0.5} />);

    await waitFor(() => {
      expect(global.IntersectionObserver).toHaveBeenCalledWith(
        expect.any(Function),
        expect.objectContaining({
          threshold: 0.5,
        })
      );
    });
  });

  it('observes the element', async () => {
    const { container } = render(<TestComponent />);
    const element = container.querySelector('div');

    await waitFor(() => {
      expect(mockObserver.observe).toHaveBeenCalledWith(element);
    });
  });

  it('adds visible class when element intersects', async () => {
    const { container } = render(<TestComponent />);
    const element = container.querySelector('div') as HTMLElement;

    await waitFor(() => {
      expect(global.IntersectionObserver).toHaveBeenCalled();
    });

    const entry = { isIntersecting: true, target: element } as IntersectionObserverEntry;
    mockObserverCallback([entry], {} as IntersectionObserver);

    expect(element.classList.contains('visible')).toBe(true);
  });

  it('unobserves element after it becomes visible', async () => {
    const { container } = render(<TestComponent />);
    const element = container.querySelector('div') as HTMLElement;

    await waitFor(() => {
      expect(mockObserver.observe).toHaveBeenCalledWith(element);
    });

    const entry = { isIntersecting: true, target: element } as IntersectionObserverEntry;
    mockObserverCallback([entry], {} as IntersectionObserver);

    expect(mockObserver.unobserve).toHaveBeenCalledWith(element);
  });

  it('does not add visible class when element is not intersecting', async () => {
    const { container } = render(<TestComponent />);
    const element = container.querySelector('div') as HTMLElement;

    await waitFor(() => {
      expect(global.IntersectionObserver).toHaveBeenCalled();
    });

    const entry = { isIntersecting: false, target: element } as IntersectionObserverEntry;
    mockObserverCallback([entry], {} as IntersectionObserver);

    expect(element.classList.contains('visible')).toBe(false);
  });

  it('disconnects observer on unmount', async () => {
    const { unmount, container } = render(<TestComponent />);

    await waitFor(() => {
      expect(mockObserver.observe).toHaveBeenCalled();
    });

    unmount();

    expect(mockObserver.disconnect).toHaveBeenCalled();
  });
});
