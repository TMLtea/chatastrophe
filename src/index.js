import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

if ("serviceWorker" in navigator) {
	navigator.serviceWorker.register("/serviceworker.js")
	.then(function(registration){
		console.log("Service Worker registered with scope:",registration.scope);
	}).catch(function(err){
		console.log("Service Worker registration failed:",err);
	})
}

ReactDOM.render(<App/>,document.getElementById('root'));

if (module.hot) {
	module.hot.accept('./components/App',()=>{
		const NextApp=require('./components/App').default;
		ReactDOM.render(<App/>,document.getElementById('root'));
	})
}
