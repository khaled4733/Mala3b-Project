import { onAuthStateChanged } from "firebase/auth";
import Register from "./Components/Users/Register";
import Login from "./Components/Users/Login";
import { auth } from "./db/Config";
import { useState, useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { StyleSheet } from "react-native";
import Home from "./Pages/Home"
import Football from "./Pages/Football";
import Basketball from "./Pages/Basketball";
import Tennis from "./Pages/Tennis";
import Profile from "./Pages/Profile";
import Stadium from "./Pages/Stadium";
import Payment from "./Pages/Payment";

const NotUsrStck = createNativeStackNavigator();

function NotUser() {
    return (
        <NavigationContainer>
            <NotUsrStck.Navigator initialRouteName='SignIn'>
                <NotUsrStck.Screen name='SignIn' component={Login} options={{
                    headerStyle: { backgroundColor: "#3c8d0d", },
                    headerTintColor: '#FFF',
                    headerTitleStyle: { fontWeight: "bold", fontSize: 30, paddingLeft: 50 }
                }} />
                <NotUsrStck.Screen name='Register' component={Register} options={{
                    headerStyle: { backgroundColor: "#3c8d0d", },
                    headerTintColor: '#FFF',
                    headerTitleStyle: { fontWeight: "bold", fontSize: 30, paddingLeft: 50 }
                }} />
            </NotUsrStck.Navigator>
        </NavigationContainer>
    );
}

const UserStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function User({ user, email }) {
    // console.log(user);
    return (

        <NavigationContainer>
            <UserStack.Navigator initialRouteName="BottomTab" >
                <UserStack.Screen name={"BottomTab"} options={{ headerShown: false }} >
                    {(props) => <BottomTab{...props} user={user} email={email} />}
                </UserStack.Screen>


                <UserStack.Screen name="Football" component={Football} options={{
                    headerStyle: { backgroundColor: "#3c8d0d", },
                    headerTintColor: '#FFF',
                    headerTitleStyle: { fontWeight: "bold", fontSize: 30, paddingLeft: 50 }
                }} />

                <UserStack.Screen name="Basketball" component={Basketball} options={{
                    headerStyle: { backgroundColor: "#3c8d0d", },
                    headerTintColor: '#FFF',
                    headerTitleStyle: { fontWeight: "bold", fontSize: 30, paddingLeft: 50 }
                }} />

                <UserStack.Screen name="Tennis" component={Tennis} options={{
                    headerStyle: { backgroundColor: "#3c8d0d", },
                    headerTintColor: '#FFF',
                    headerTitleStyle: { fontWeight: "bold", fontSize: 30, paddingLeft: 50 }
                }} />

                <UserStack.Screen name="Profile" component={Profile} options={{
                    headerStyle: { backgroundColor: "#3c8d0d", },
                    headerTintColor: '#FFF',
                    headerTitleStyle: { fontWeight: "bold", fontSize: 30, paddingLeft: 50 }
                }} />

                <UserStack.Screen name="Stadium" component={Stadium} options={{
                    headerStyle: { backgroundColor: "#3c8d0d", },
                    headerTintColor: '#FFF',
                    headerTitleStyle: { fontWeight: "bold", fontSize: 30, paddingLeft: 50 }
                }} />

                <UserStack.Screen name="Payment" component={Payment} options={{
                    headerStyle: { backgroundColor: "#3c8d0d", },
                    headerTintColor: '#FFF',
                    headerTitleStyle: { fontWeight: "bold", fontSize: 30, paddingLeft: 50 }
                }} />

            </UserStack.Navigator>
        </NavigationContainer>
    )
}



function BottomTab({ user }) {

    return (
        <Tab.Navigator>
            <UserStack.Screen name="Home" component={Home} options={{
                headerStyle: { backgroundColor: "#3c8d0d", },
                headerTintColor: '#FFF',
                headerTitleStyle: { fontWeight: "bold", fontSize: 30, paddingLeft: 50 },
                tabBarLabel: 'Home',
                tabBarIcon: () => (
                    <MaterialCommunityIcons name="home" color={'#000000'} size={30} />
                ),
            }} />

            <Tab.Screen name={"Profile"} initialParams={{ user }} component={Profile} options={{
                headerStyle: {
                    backgroundColor: '#3c8d0d',
                },
                headerTintColor: '#fff',
                tabBarLabel: 'Profile',
                tabBarIcon: () => (
                    <MaterialCommunityIcons name="account" color={'#000000'} size={30} />
                ),
            }
            }>

            </Tab.Screen>
        </Tab.Navigator>
    )
}







export default function App() {
    const [user, setUser] = useState(undefined);
    const [email, setEmail] = useState("");
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => { //if user is authinticated take it from the anynomous fn. then save it using 'useState'
            setUser(user);
            // setEmail(user.email);
        }); //if (user) is authinticated set(user) -> doesn't have to register since i am already authinticated, else get register tab
        return () => {
            unsub();
        };
    }, []);
    if (user) {
        return (
            <User user={user} />

        );
    } else {
        return (
            <NotUser />
        );
    }
}




