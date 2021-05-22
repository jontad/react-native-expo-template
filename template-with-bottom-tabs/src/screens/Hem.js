import React from 'react';
import { SafeAreaView } from 'react-native';
import { Layout } from 'react-native-rapi-ui';

import InfoCard from '../components/InfoCard'

export default function () {
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
				timeText='8m'
				/>
			</SafeAreaView>
		</Layout>

		
	);
}
