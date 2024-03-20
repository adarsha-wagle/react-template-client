import React from 'react';

interface ErrorBoundaryProps extends React.PropsWithChildren<{}> {
  // Define any other props here if needed
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error(error, errorInfo);
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;
    if (hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return children;
  }
}

export default ErrorBoundary;
