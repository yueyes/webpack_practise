// src/index.js
import React from 'react';
import ReactDom from 'react-dom';

import './main.css'


class App extends React.Component {

	render() {
		console.log("hi")
		return (
			<div className="app">
			<p>Hello World</p>
			</div>)
	}
}

module.exports = {
	run: App
}
// ReactDom.render(
// 	<h1>hello world</h1>,
// 	document.getElementById('root')
// );