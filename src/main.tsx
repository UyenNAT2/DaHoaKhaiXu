import React, { Component, ErrorInfo, ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Safeguard against third-party extensions overriding window.fetch
try {
  const originalFetch = window.fetch;
  let activeFetch = typeof originalFetch === 'function' ? originalFetch.bind(window) : originalFetch;
  Object.defineProperty(window, 'fetch', {
    configurable: true,
    enumerable: true,
    get: () => activeFetch,
    set: (fn) => {
      activeFetch = fn;
    },
  });
} catch {
  // Ignore definition conflicts
}

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Unhandled app error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#F6FAF6] p-6 text-center">
          <div className="max-w-md bg-white p-8 rounded-3xl border-2 border-[#DCEEE1] shadow-sm">
            <div className="w-12 h-12 mx-auto mb-4 rounded-2xl bg-[#E8F5EC] text-[#2F5E3C] flex items-center justify-center text-2xl">
              🌱
            </div>
            <h2 className="text-xl font-normal text-[#1D3A24] mb-2">Đang tải lại trang...</h2>
            <p className="text-xs text-[#528261] mb-6">Đã xảy ra sự cố hiển thị nhỏ. Vui lòng bấm làm mới.</p>
            <button
              onClick={() => {
                this.setState({ hasError: false, error: null });
                window.location.reload();
              }}
              className="px-6 py-2.5 rounded-full bg-[#3B734E] text-white text-xs font-medium cursor-pointer hover:bg-[#2F5E3C] transition-colors"
            >
              Làm mới trang
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);

