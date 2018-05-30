import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//Routes
// app.use("/", require("./routes/home"));
// app.use("/posts", require("./routes/posts"));

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
