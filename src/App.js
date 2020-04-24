import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import { Header, Button, Spinner } from './components/common';


class App extends Component {

	state = { loggedIn: null };

	componentWillMount(){
		firebase.initializeApp({
			apiKey: 'AIzaSyBYqtTaV-yDTQ9sVqiSSWZKKypZVKgCQ0Y',
    		authDomain: 'authentication-c09eb.firebaseapp.com',
    		databaseURL: 'https://authentication-c09eb.firebaseio.com',
    		projectId: 'authentication-c09eb',
    		storageBucket: 'authentication-c09eb.appspot.com',
    		messagingSenderId: '697021781372',
    		appId: '1:697021781372:web:08b28fd402f0a2625440f9',
    		measurementId: 'G-GYKDG2711E' 
		});

		firebase.auth().onAuthStateChanged((user) => {
			if(user) {
				this.setState({ loggedIn: true });
			} else {
				this.setState({ loggedIn: false });
			}	
		});
	}

	renderContent() {
		switch (this.state.loggedIn) {
			case true:
				return (
					<Button onPress={() => firebase.auth().signOut()}>
						Log Out
					</Button>
				);
			case false:
				return <LoginForm />;
			default:
				return <Spinner size="large" />;
		}
	}

	render () {
		return (
			<View>
				<Header headerText="Authentication" />
				{this.renderContent()}
			</View>
		);
	}
}


export default App;