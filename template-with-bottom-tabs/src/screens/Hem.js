import React from 'react';
import { SafeAreaView, TouchableOpacity } from 'react-native';

import { Layout } from 'react-native-rapi-ui';
import { Ionicons } from '@expo/vector-icons';

import InfoCard from '../components/InfoCard'



export default function ({ navigation }) {

	function informationButton() {
		return(
			<TouchableOpacity onPress={() => {navigation.navigate('SecondScreen');}}>
				<Ionicons
					name="information-circle-outline"
					style={{ opacity: 0.6, color: '#2071B5' }}
					size={25}
				/>	
			</TouchableOpacity>
		);
	}

	return (
		<Layout>
			<SafeAreaView >
				<InfoCard 
				headerText='Användande nu' 
				leftText='1337 w' 
				/>
				<InfoCard 
				headerText='Förbrukning idag' 
				leftText='18.2 kWh' 
				rightText='22.12 kr' 
				/>
				<InfoCard 
				headerText='Förbrukning denna vecka' 
				leftText='62.5 kWh' 
				rightText='129.02 kr' 
				/>
				<InfoCard 
				headerText='Situation' 
				leftText='Export: 98% (Neg)'
				infoPosition={informationButton(navigation)}
				/>
			</SafeAreaView>
		</Layout>

		
	);
}
