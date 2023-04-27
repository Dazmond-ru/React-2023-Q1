      import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { Store } from 'redux'

const withComponents = <P extends object>(WrappedComponent: React.ComponentType<P>, store: Store) => {
  return class extends React.Component<P> {
    render() {
      return (
        <Provider store={store}>
          <BrowserRouter>
            <WrappedComponent {...(this.props as P)} />
          </BrowserRouter>
        </Provider>
      )
    }
  }
}

export default withComponents
