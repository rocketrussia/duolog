import React from 'react';
import ReactDOM from 'react-dom';

import StartPage from './pages/start/StartPage'

const App = () => {
  return (
    <div>
      <StartPage />
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);