import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Three.js Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return null; // Render nothing if there's an error
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
