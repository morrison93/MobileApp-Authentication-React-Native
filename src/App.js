import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {

	componentWillMount(){
		firebase.initializeApp({
			apiKey: 'api-key',
			authDomain: 'project-id.firebaseapp.com',
			databaseURL: 'https://project-id.firebaseio.com',
			projectId: 'project-id',
			storageBucket: 'project-id.appspot.com',
			messagingSenderId: 'sender-id',
			appID: 'app-id' 
		});
	}

	render () {
		return (
			<View>
				<Header headerText="Authentication" />
				<LoginForm />
			</View>
		);
	}
}


export default App;