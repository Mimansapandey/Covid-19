import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faHandsHelping } from '@fortawesome/free-solid-svg-icons';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Header from './Header';
import HeaderBack from './HeaderBack';

import { DrawerContent } from './DrawerContent';

import Feed from './Feed';
import About from './About';
import SignInScreen from './Sign-in';

import Call from './Call';
import Support from './Support';
import Dashboard from './Dashboard';
import Faq from './Faq';
import Settings from './Settings';

const CallStack = createStackNavigator();
const SupportStack = createStackNavigator();
const DashboardStack = createStackNavigator();
const FaqStack = createStackNavigator();
const SettingStack = createStackNavigator();
const FeedStack = createStackNavigator();
const AboutStack = createStackNavigator();

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const MainTabScreen = () => (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />} drawerContentOptions={{ gestureEnabled: true }} >
        <Drawer.Screen name="Home" component={BottomTabScreen} />
        <Drawer.Screen name="Feed" component={FeedScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />
        <Drawer.Screen name="Sign Out" component={SignInScreen} />
    </Drawer.Navigator>
);

export default MainTabScreen;

const config = {
    animation: 'spring',
    config: {
        stiffness: 1000,
        damping: 50,
        mass: 3,
        overshootClamping: false,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 0.01,
    },
};

const BottomTabScreen = () => (
    <Tab.Navigator
        initialRouteName="Dashboard"
        tabBarOptions={{
            activeTintColor: '#FF69B4',
            inactiveTintColor: '#ffb6c1',
            showLabel: false
        }}
        height={60}
    >

        <Tab.Screen
            name="Dashboard"
            component={DashboardScreen}
            options={{
                tabBarColor: '#fff',
                tabBarIcon: ({ color }) => (
                    <FontAwesomeIcon icon={faBars} color={color} size={35} />
                ),
            }}
        />
        
         <Tab.Screen
            name="Feed"
            component={FeedScreen}
            options={{
                tabBarColor: '#fff',
                tabBarIcon: ({ color }) => (
                    <FontAwesomeIcon icon={faUserFriends} color={color} size={35} />
                ),
            }}
        />
        <Tab.Screen
            name="Call"
            component={CallScreen}
            options={{
                tabBarColor: '#fff',
                tabBarIcon: ({ color }) => (
                    <FontAwesomeIcon icon={faPhoneAlt} color={color} size={35} />
                ),
            }}
        />
        <Tab.Screen
            name="FAQs"
            component={FaqScreen}
            options={{
                tabBarColor: '#fff',
                tabBarIcon: ({ color }) => (
                    <FontAwesomeIcon icon={faQuestion} color={color} size={35} />
                ),
            }}
        />
        <Tab.Screen
            name="Support"
            component={SupportScreen}
            options={{
                tabBarColor: '#fff',
                tabBarIcon: ({ color }) => (
                    <FontAwesomeIcon icon={faHandsHelping} color={color} size={35} />
                ),
            }}
        />
        <Tab.Screen
            name="Settings"
            component={SettingScreen}
            options={{
                tabBarColor: '#fff',
                tabBarIcon: ({ color }) => (
                    <FontAwesomeIcon icon={faCog} color={color} size={35} />
                ),
            }}
        />
    </Tab.Navigator>
)

const SupportScreen = () => (
    <SupportStack.Navigator screenOptions={({ navigation }) => {
        return {
            headerTitle: () => <Header title='Overview' navigation={navigation} />, headerTitleAlign: 'center'
        }
    }}>
        <SupportStack.Screen name="Support" component={Support} options={{
            title: 'Support',
        }} />
    </SupportStack.Navigator>
);

const DashboardScreen = () => (
    <DashboardStack.Navigator screenOptions={({ navigation }) => {
        return {
            headerTitle: () => <Header title='Dashboard' navigation={navigation} />, headerTitleAlign: 'center'
        }
    }}>
        <DashboardStack.Screen name="Dashboard" component={Dashboard} options={{
            title: 'Dashboard',
        }} />
    </DashboardStack.Navigator>
);

const FaqScreen = () => (
    <FaqStack.Navigator screenOptions={({ navigation }) => {
        return {
            headerTitle: () => <Header title='FAQs' navigation={navigation} />, headerTitleAlign: 'center'
        }

    }}>
        <FaqStack.Screen name="FAQ" component={Faq} options={{
            title: 'FAQs',

        }} />
    </FaqStack.Navigator>
);

const FeedScreen = () => (
    <FeedStack.Navigator screenOptions={({ navigation }) => {
        return {
            headerTitle: () => <Header title='Feed' navigation={navigation} />, headerTitleAlign: 'center',
        }
    }}>
        <FeedStack.Screen name="Feed" component={Feed} options={{
            title: 'Feed',

        }} />
    </FeedStack.Navigator>
);

const CallScreen = () => (
    <CallStack.Navigator screenOptions={({ navigation }) => {
        return {
            headerTitle: () => <Header title='Helpline' navigation={navigation} />, headerTitleAlign: 'center',
        }
    }}>
        <CallStack.Screen name="Call" component={Call} options={{
        }} />
    </CallStack.Navigator>
);

const SettingScreen = () => (
    <SettingStack.Navigator
        screenOptions={{
            gestureEnabled: true, gestureDirection: 'horizontal',
            transitionSpec: { open: config, close: config },
            cardStyleInterpolator:
                CardStyleInterpolators.forHorizontalIOS
        }}>
        <SettingStack.Screen name="Settings" component={Settings} options={({ navigation }) => {
            return {
                headerTitle: () => <Header title='Settings' navigation={navigation} />,
                headerTitleAlign: 'center',
            }
        }}
        />
        <SettingStack.Screen name="About" component={About} options={({ navigation }) => {
            return {
                headerTitle: () => <HeaderBack title='About' navigation={navigation} />,
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
            }
        }} />
    </SettingStack.Navigator>
);

const AboutScreen = () => (
    <AboutStack.Navigator screenOptions={({ navigation }) => {
        return {
            headerTitle: () => <Header title='About' navigation={navigation} />, headerTitleAlign: 'center',
        }
    }}>
        <AboutStack.Screen name="About" component={About} options={{
            title: 'About',

        }} />
    </AboutStack.Navigator>
);


