import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Tasks from './Tasks';

ReactDOM.render(
    <React.StrictMode>
        <div className="Wrapper">
            <Tasks/>
        </div>
    </React.StrictMode>,
  document.getElementById('root')
);

