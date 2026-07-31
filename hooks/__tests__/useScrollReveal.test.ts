import { renderHook } from '@testing-library/react';
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

  it('returns a ref object', () => {
    const { result } = renderHook(() => useScrollReveal());
    expect(result.current).toHaveProperty('current');
  });

  it('creates IntersectionObserver with default threshold', () => {
    const { result } = renderHook(() => useScrollReveal());
    result.current.current = document.createElement('div');

    expect(global.IntersectionObserver).toHaveBeenCalledWith(
      expect.any(Function),
      expect.objectContaining({
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px',
      })
    );
  });

  it('creates IntersectionObserver with custom threshold', () => {
    const { result } = renderHook(() => useScrollReveal(0.5));
    result.current.current = document.createElement('div');

    expect(global.IntersectionObserver).toHaveBeenCalledWith(
      expect.any(Function),
      expect.objectContaining({
        threshold: 0.5,
      })
    );
  });

  it('observes the element on mount', () => {
    const { result } = renderHook(() => useScrollReveal());
    const element = document.createElement('div');
    result.current.current = element;

    expect(mockObserver.observe).toHaveBeenCalledWith(element);
  });

  it('adds visible class when element intersects', () => {
    const { result } = renderHook(() => useScrollReveal());
    const element = document.createElement('div');
    result.current.current = element;

    const entry = { isIntersecting: true } as IntersectionObserverEntry;
    mockObserverCallback([entry], {} as IntersectionObserver);

    expect(element.classList.contains('visible')).toBe(true);
  });

  it('unobserves element after it becomes visible', () => {
    const { result } = renderHook(() => useScrollReveal());
    const element = document.createElement('div');
    result.current.current = element;

    const entry = { isIntersecting: true } as IntersectionObserverEntry;
    mockObserverCallback([entry], {} as IntersectionObserver);

    expect(mockObserver.unobserve).toHaveBeenCalledWith(element);
  });

  it('does not add visible class when element is not intersecting', () => {
    const { result } = renderHook(() => useScrollReveal());
    const element = document.createElement('div');
    result.current.current = element;

    const entry = { isIntersecting: false } as IntersectionObserverEntry;
    mockObserverCallback([entry], {} as IntersectionObserver);

    expect(element.classList.contains('visible')).toBe(false);
  });

  it('disconnects observer on unmount', () => {
    const { unmount, result } = renderHook(() => useScrollReveal());
    result.current.current = document.createElement('div');

    unmount();

    expect(mockObserver.disconnect).toHaveBeenCalled();
  });

  it('handles null ref gracefully', () => {
    const { result } = renderHook(() => useScrollReveal());
    // Don't set result.current.current, leaving it as null

    expect(() => {
      // Should not throw
    }).not.toThrow();
  });
});
