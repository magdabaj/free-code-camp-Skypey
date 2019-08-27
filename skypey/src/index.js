import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './registerServiceWorker';
import store from './redux/store';

function fancyLog() {
    console.log("%c Rendered with ? ??", "background: purple; color: #FFF");
    console.log(store.getState());
    console.log(store.getState().user);
}

const render  = () => {
    fancyLog();
    ReactDOM.render(<App/>, document.getElementById('root'));
};
render();
store.subscribe(render);

serviceWorker.unregister();
