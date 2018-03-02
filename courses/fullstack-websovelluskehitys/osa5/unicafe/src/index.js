import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import appExports from './App';

const App = appExports.App
const store = appExports.store

const renderApp = () => {
    ReactDOM.render(<App />, document.getElementById('root'));
}

renderApp()
store.subscribe(renderApp)