// @flow
import React from 'react'

import auth from '../../src/'

export default class PersonalInfo extends React.Component<Object, Object> {
  componentWillMount() {
    auth.trackSession(session => {
      this.setState({
        webId: session ? session.webId : undefined,
        gateway: session ? session.gateway : undefined
      })

      if (session) {
        auth
          .fetch('https://pedro1.localhost:8442/private')
          .then(() => console.log('worked'))
      }
    })
  }

  render() {
    const { webId, gateway } = this.state
    return webId ? (
      <React.Fragment>
        <p>
          Your WebID is{' '}
          <a href={webId} target="_blank">
            <code>{webId}</code>
          </a>
        </p>
        <p>
          Your Gateway is{' '}
          <a href={gateway} target="_blank">
            <code>{gateway}</code>
          </a>
        </p>
      </React.Fragment>
    ) : null
  }
}
