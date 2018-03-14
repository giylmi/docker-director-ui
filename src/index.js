import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'semantic-ui-css/semantic.min.css';
import {Provider} from "react-redux";
import store, {history} from "./store";
import {ConnectedRouter} from "react-router-redux";
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history} >
        <div>
          <App/>
        </div>
      </ConnectedRouter>
    </Provider>, document.getElementById('root'));
// registerServiceWorker();
