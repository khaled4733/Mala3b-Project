import { onAuthStateChanged } from "firebase/auth";
import Register from "./Components/Users/Register";
import Login from "./Components/Users/Login";
import ForgotPassword from "./Components/Users/ForgotPassword";
import { auth } from "./db/Config";
import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { StyleSheet } from "react-native";
import Home from "./Pages/Home";
import Football from "./Pages/Football";
import Basketball from "./Pages/Basketball";
import Tennis from "./Pages/Tennis";
import Profile from "./Pages/Profile";
import Payment from "./Pages/Payment";
import AdminArea from "./Pages/AdminArea/AdminArea";
import FootBallEdit from "./Pages/AdminArea/FootballEdit";
import BasketballEdit from "./Pages/AdminArea/BasketballEdit";
import TennisEdit from "./Pages/AdminArea/TennisEdit";
import Stadium from "./Pages/Stadium";
import ValidationPage from "./Pages/ValidationPage";
import WelcomePage from "./Pages/WelcomePage";
import Favourite from "./Pages/Favourite";
import EditProfile from "./Pages/EditProfile";


const NotUsrStck = createNativeStackNavigator();

function NotUser() {
  return (
    <NavigationContainer>
      <NotUsrStck.Navigator initialRouteName='WelcomePage'>
        <NotUsrStck.Screen name='WelcomePage' component={WelcomePage} options={{
          headerStyle: { backgroundColor: "#FFF", },
          headerTintColor: '#000000',
          headerTitleStyle: { fontWeight: "bold", fontSize: 20, paddingLeft: 10 }
        }} />
        <NotUsrStck.Screen name='SignIn' component={Login} options={{
          headerStyle: { backgroundColor: "#FFF", },
          headerTintColor: '#000000',
          headerTitleStyle: { fontWeight: "bold", fontSize: 20, paddingLeft: 10 }
        }} />
        <NotUsrStck.Screen name='Register' component={Register} options={{
          headerStyle: { backgroundColor: "#FFF", },
          headerTintColor: '#000000',
          headerTitleStyle: { fontWeight: "bold", fontSize: 20, paddingLeft: 10 }
        }} />
        <NotUsrStck.Screen name='ForgotPassword' component={ForgotPassword} options={{
          headerStyle: { backgroundColor: "#FFF", },
          headerTintColor: '#000000',
          headerTitleStyle: { fontWeight: "bold", fontSize: 20, paddingLeft: 10 }
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
      <UserStack.Navigator initialRouteName="BottomTab">
        <UserStack.Screen name={"BottomTab"} options={{ headerShown: false }}>
          {(props) => <BottomTab {...props} user={user} email={email} />}
        </UserStack.Screen>

        <UserStack.Screen
          name="Football"
          component={Football}
          options={{
            headerStyle: { backgroundColor: "#FFF" },
            headerTintColor: "#000000",
            headerTitleStyle: { fontWeight: "bold", fontSize: 20 },
          }}
        />

        <UserStack.Screen
          name="Basketball"
          component={Basketball}
          options={{
            headerStyle: { backgroundColor: "#FFF" },
            headerTintColor: "#000000",
            headerTitleStyle: { fontWeight: "bold", fontSize: 20 },
          }}
        />

        <UserStack.Screen
          name="Tennis"
          component={Tennis}
          options={{
            headerStyle: { backgroundColor: "#FFF" },
            headerTintColor: "#000000",
            headerTitleStyle: { fontWeight: "bold", fontSize: 20 },
          }}
        />

        <UserStack.Screen
          name="Stadium"
          component={Stadium}
          options={{
            headerStyle: { backgroundColor: "#FFF" },
            headerTintColor: "#000000",
            headerTitleStyle: { fontWeight: "bold", fontSize: 20 },
          }}
        />

        <UserStack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerStyle: { backgroundColor: "#FFF" },
            headerTintColor: "#000000",
            headerTitleStyle: { fontWeight: "bold", fontSize: 20 },
          }}
        />

        <UserStack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{
            headerStyle: { backgroundColor: "#FFF" },
            headerTintColor: "#000000",
            headerTitleStyle: { fontWeight: "bold", fontSize: 20 },
          }}
        />

        <UserStack.Screen
          name="Payment"
          component={Payment}
          initialParams={{ user }}
          options={{
            headerStyle: { backgroundColor: "#FFF" },
            headerTintColor: "#000000",
            headerTitleStyle: { fontWeight: "bold", fontSize: 20 },
          }}
        />

        <UserStack.Screen
          name="AdminArea"
          component={AdminArea}
          options={{
            headerStyle: { backgroundColor: "#FFF" },
            headerTintColor: "#000000",
            headerTitleStyle: { fontWeight: "bold", fontSize: 20 },
          }}
        />

        <UserStack.Screen
          name="FootBallEdit"
          component={FootBallEdit}
          options={{
            headerStyle: { backgroundColor: "#FFF" },
            headerTintColor: "#000000",
            headerTitleStyle: { fontWeight: "bold", fontSize: 20 },
          }}
        />

        <UserStack.Screen
          name="BasketballEdit"
          component={BasketballEdit}
          options={{
            headerStyle: { backgroundColor: "#FFF" },
            headerTintColor: "#000000",
            headerTitleStyle: { fontWeight: "bold", fontSize: 20 },
          }}
        />

        <UserStack.Screen
          name="TennisEdit"
          component={TennisEdit}
          options={{
            headerStyle: { backgroundColor: "#FFF" },
            headerTintColor: "#000000",
            headerTitleStyle: { fontWeight: "bold", fontSize: 20 },
          }}
        />

        <UserStack.Screen
          name="ValidationPage"
          component={ValidationPage}
          options={{
            headerStyle: { backgroundColor: "#FFF" },
            headerTintColor: "#000000",
            headerTitleStyle: { fontWeight: "bold", fontSize: 20 },
          }}
        />
      </UserStack.Navigator>
    </NavigationContainer>
  );
}

function BottomTab({ user }) {
  return (
    <Tab.Navigator>
      <UserStack.Screen
        name="Home"
        component={Home}
        options={{
          headerStyle: { backgroundColor: "#FFF" },
          headerTintColor: "#000000",
          headerTitleStyle: { fontWeight: "bold", fontSize: 20 },
          tabBarLabel: "Home",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="home" color={"#000000"} size={30} />
          ),
        }}
      />

      <Tab.Screen
        name={"Favourite"}
        component={Favourite}
        initialParams={{ user }}
        options={{
          headerStyle: {
            backgroundColor: "#FFF",
          },
          headerTintColor: "#000000",
          tabBarLabel: "Profile",
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="heart"
              color={"#000000"}
              size={30}
            />
          ),
        }}
      ></Tab.Screen>

      <Tab.Screen
        name={"Profile"}
        component={Profile}
        initialParams={{ user }}
        options={{
          headerStyle: {
            backgroundColor: "#FFF",
          },
          headerTintColor: "#000000",
          tabBarLabel: "Profile",
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="account"
              color={"#000000"}
              size={30}
            />
          ),
        }}
      ></Tab.Screen>

    </Tab.Navigator>
  );
}

export default function App() {
  const [user, setUser] = useState(undefined);
  const [email, setEmail] = useState("");
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      //if user is authinticated take it from the anynomous fn. then save it using 'useState'
      setUser(user);
      // setEmail(user.email);
    }); //if (user) is authinticated set(user) -> doesn't have to register since i am already authinticated, else get register tab
    return () => {
      unsub();
    };
  }, []);
  if (user) {
    return <User user={user} />;
  } else {
    return <NotUser />;
  }
}
