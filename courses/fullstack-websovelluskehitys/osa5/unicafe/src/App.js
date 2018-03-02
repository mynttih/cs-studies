import counterReducer from './reducer'
import { createStore } from 'redux'
import React from 'react';

const store = createStore(counterReducer)

const Statistiikka = () => {
  const storeNow = store.getState()
  const palautteita = storeNow.good + storeNow.ok + storeNow.bad

  if (palautteita === 0) {
    return (
      <div>
        <h2>statistiikka</h2>
        <div>ei yhtään palautetta annettu</div>
      </div>
    )
  }

  return (
    <div>
      <h2>statistiikka</h2>
      <table>
        <tbody>
          <tr>
            <td>hyvä</td>
            <td>
              {storeNow.good}
            </td>
          </tr>
          <tr>
            <td>neutraali</td>
            <td>
              {storeNow.ok}
            </td>
          </tr>
          <tr>
            <td>huono</td>
            <td>
              {storeNow.bad}
            </td>
          </tr>
          <tr>
            <td>keskiarvo</td>
            <td>
              {Number((storeNow.good - storeNow.bad) / palautteita).toFixed(2)}
            </td>
          </tr>
          <tr>
            <td>positiivisia</td>
            <td>
              {Number((storeNow.good / palautteita) * 100).toFixed(1)}%
            </td>
          </tr>
        </tbody>
      </table>

      <button onClick={e => store.dispatch({ type: 'ZERO' })}>nollaa tilasto</button>
    </div >
  )
}

class App extends React.Component {
  klik = (nappi) => () => {
    store.dispatch({ type: nappi})
  }

  render() {
    return (
      <div>
        <h2>anna palautetta</h2>
        <button onClick={this.klik('GOOD')}>hyvä</button>
        <button onClick={this.klik('OK')}>neutraali</button>
        <button onClick={this.klik('BAD')}>huono</button>
        <Statistiikka />
      </div>
    )
  }
}

export default { App, store };