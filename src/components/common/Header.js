// Import libraries for making a component 
import React from 'react';
import { Text, View } from 'react-native';  // When we want to center for example the text we use the view tag

// Make a component 
const Header = (props) => {					// Reference to the props that’s coming in from the parent (root) component
	const { textStyle, viewStyle } = styles;  

	return (
		<View style={viewStyle}>
			<Text style={textStyle}>{props.headerText}</Text> 
		</View>	// style={textStyle} => this is a prop(erty). Furthermore the text tag is inside a view giving origin to this code
	);	
};

const styles = {
	viewStyle: {
		backgroundColor: '#F8F8F8',
		justifyContent: 'center',			// Flexbox is a technique for positioning elements 
		alignItems: 'center',
		height: 60,
		paddingTop: 15,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 20 },
		shadowOpacity: 1,
		elevation: 4,
		position: 'relative',
		borderRadius: 20
	},
	textStyle: {
		fontSize: 20
	}
};




// Make the component available to the other parts of the app
export { Header };