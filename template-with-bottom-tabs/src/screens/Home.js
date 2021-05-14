import React from 'react';
import { SafeAreaView, View, Linking } from 'react-native';
import {
	Layout,
	Button,
	Text,
	Section,
	SectionContent,
} from 'react-native-rapi-ui';

import InfoCard from '../components/InfoCard'

export default function ({ navigation }) {
	return (
		<Layout>
			<SafeAreaView >
				<InfoCard 
				headerText='Användande nu' 
				leftText='1337 w' 
				timeText='8m'
				/>
				<InfoCard 
				headerText='Förbrukning idag' 
				leftText='234 kWh' 
				rightText='129.02 kr' 
				timeText='8m'
				/>
				<InfoCard 
				headerText='Situation' 
				leftText='EXPORT'
				timeText='8m'
				/>
			</SafeAreaView>
		</Layout>

		
	);
}
