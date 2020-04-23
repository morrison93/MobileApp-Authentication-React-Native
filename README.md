# React-Native Mobile App - Authenticator

In this repository you can find the code from "The Complete React Native and Redux Course"
The objective of this course is getting acquainted with the React-Native Platform as well as Redux
by getting an introdutory way of understanding about JSX, Components, Props, State and all the integrating parts of the React-Native Platform.


## ROADMAP:
	1. Create/ Present a Mockup of the App Outline (presented in ./Mockups & Results);
	2. Re-using Components from the album App, Header, Card/CardSection and Button;
	3. Setting up Firebase and integrating with app;
	4. Creation of the LoginForm component;
		4.1. Introduced TextInputs
		4.2. Making the Input reusable;
		4.3. Added Password field with secure text entry; 

### How to run in Android device: 
	1. Make Developer Option - On
	2. Enable USB debugging	
	3. Connect your mobile with usb cable.
	4. Open your sdk platform-tools 
	5. In sdk platform-tools: cmd>adb devices
	6. In sdk platform-tools: cmd>adb reverse tcp:8081 tcp:8081 
	7. in project directory cmd>react-native run-android   