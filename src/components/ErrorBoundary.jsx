import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-dark-bg text-white">
          <div className="text-center p-8">
            <h2 className="text-2xl font-bold mb-4 text-primary-orange">Something went wrong</h2>
            <p className="text-gray-300 mb-6">We're sorry, but something unexpected happened.</p>
            <button 
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-primary-orange text-white rounded-lg hover:bg-primary-orange/80 transition-colors"
            >
              Reload Page
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary