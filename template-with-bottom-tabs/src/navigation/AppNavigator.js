import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { theme } from 'react-native-rapi-ui';
import TabBarIcon from '../components/utils/TabBarIcon';
import TabBarText from '../components/utils/TabBarText';

import Home from '../screens/Home';
import SecondScreen from '../screens/SecondScreen';
import About from '../screens/About';
import Profile from '../screens/Profile';

const MainStack = createStackNavigator();
const Main = () => {
	return (
		<MainStack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<MainStack.Screen name="MainTabs" component={MainTabs} />
			<MainStack.Screen name="SecondScreen" component={SecondScreen} />
		</MainStack.Navigator>
	);
};

const Tabs = createBottomTabNavigator();
const MainTabs = () => {
	return (
		<Tabs.Navigator
			tabBarOptions={{
				tabStyle: { borderTopWidth: 0 },
				style: { borderTopWidth: 1, borderColor: '#c0c0c0' },
				activeTintColor: theme.primary,
			}}
		>
			{/* these icons using Ionicons */}
			<Tabs.Screen
				name="Home"
				component={Home}
				options={{
					tabBarLabel: ({ focused }) => (
						<TabBarText focused={focused} title="Hem" />
					),
					tabBarIcon: ({ focused }) => (
						<TabBarIcon focused={focused} icon={'home-outline'} />
					),
				}}
			/>
			<Tabs.Screen
				name="Profile"
				component={Profile}
				options={{
					tabBarLabel: ({ focused }) => (
						<TabBarText focused={focused} title="Detalj" />
					),
					tabBarIcon: ({ focused }) => (
						<TabBarIcon focused={focused} icon={'bar-chart-outline'} />
					),
				}}
			/>
			
		</Tabs.Navigator>
	);
};

export default () => {
	return (
		<NavigationContainer>
			<Main />
		</NavigationContainer>
	);
};
