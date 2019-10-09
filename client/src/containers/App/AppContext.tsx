import { ApolloProvider } from '@apollo/react-components';
import React, { Component } from 'react';
import Apollo from '../../components/Apollo';
import App from './App';

class AppContext extends Component {
  state = {
    client: null
  }

  async componentDidMount() {
    const c = await Apollo.createClient()
    this.setState({
      ...this.state,
      client: c
    })
  }


  render() {
    const { client } = this.state
    if (!client) return null

    return (
      <ApolloProvider client={client}>
          <App />
      </ApolloProvider>
    )
  }
}

export default AppContext
