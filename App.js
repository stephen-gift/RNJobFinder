import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import {
  ChatsScreen,
  HomePageScreen,
  MyJobScreen,
  ProfileScreen,
} from "./screens";
import {
  ChatsContainer,
  FilterContainer,
  FilterDetailsContainer,
  HomePageContainer,
  JobByCategoryContainer,
  MyJobsContainer,
  PopularJobsContainer,
  ProfileContainer,
} from "./containers";
import Colors from "./constants/Colors/Colors";
import { Ionicons } from "@expo/vector-icons";
import { JobFinderIcon } from "./components/Icon";

const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();

const stackScreenOptions = ({ navigation }) => ({
  headerStyle: {
    backgroundColor: Colors.Black[100], // Header background color
  },
  headerTintColor: "#fff", // Header text color
  // headerShown: false,
  contentStyle: {
    backgroundColor: Colors.Black[100],
  },
  containerStyle: {
    backgroundColor: Colors.Black[100],
  },

  contentStyle: {
    backgroundColor: Colors.Black[500],
  },
  headerTintColor: Colors.White[100],
  headerTitleStyle: { color: Colors.White[100] },
  headerShadowVisible: false,
  cardStyle: { backgroundColor: Colors.Black[100] },
  headerBackImage: ({ tintColor }) => (
    <JobFinderIcon
      icon={"chevron-back"}
      bgColor={Colors.Black[700]}
      color={Colors.White[100]}
      onPress={() => navigation.goBack()}
    />
  ),
  headerBackTitleVisible: false,
});

const BottomTabScreenOptions = ({ route }) => ({
  headerStyle: {
    backgroundColor: Colors.Black[100],
  },
  headerShown: false,
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === "My Home") {
      iconName = focused ? "home" : "home-outline";
    } else if (route.name === "My Jobs") {
      iconName = focused ? "file-tray-full" : "file-tray-full-outline";
    } else if (route.name === "Chats") {
      iconName = focused ? "chatbubbles" : "chatbubbles-outline";
    } else if (route.name === "Profile") {
      iconName = focused ? "person" : "person-outline";
    }

    // You can return any component that you like here!
    return <Ionicons name={iconName} size={size} color={color} />;
  },
  tabBarActiveTintColor: Colors.Primary[100],
  tabBarInactiveTintColor: Colors.White[100],
  headerTintColor: "white",
  tabBarItemStyle: {
    backgroundColor: Colors.Black[200],
    borderTopColor: Colors.Primary[100],
    borderTopWidth: 0,
    elevation: 0,
    shadowColor: "transparent",
    shadowOpacity: 0,
    shadowOffset: 0,
  },
});

const HomeStack = () => (
  <Stack.Navigator screenOptions={stackScreenOptions}>
    <Stack.Screen
      name="Home"
      component={HomePageContainer}
      options={{
        title: "Home",
      }}
    />
    <Stack.Screen name="Popular Jobs" component={PopularJobsContainer} />
    <Stack.Screen name="Jobs By Category" component={JobByCategoryContainer} />
    <Stack.Screen name="Filter" component={FilterContainer} />
    <Stack.Screen name="FilterDetails" component={FilterDetailsContainer} />
  </Stack.Navigator>
);

const MyJobsStack = () => (
  <Stack.Navigator screenOptions={stackScreenOptions}>
    <Stack.Screen name="Application Stats" component={MyJobsContainer} />
  </Stack.Navigator>
);
const ChatsStack = () => (
  <Stack.Navigator screenOptions={stackScreenOptions}>
    <Stack.Screen name="Messages" component={ChatsContainer} />
  </Stack.Navigator>
);
const ProfileStack = () => (
  <Stack.Navigator screenOptions={stackScreenOptions}>
    <Stack.Screen name="My Profile" component={ProfileContainer} />
  </Stack.Navigator>
);

const BottomTabNavigator = () => (
  <BottomTab.Navigator screenOptions={BottomTabScreenOptions}>
    <BottomTab.Screen
      name="My Home"
      component={HomeStack}
      options={{
        tabBarStyle: {
          borderTopColor: Colors.Primary[100],
          borderTopWidth: 0,
          elevation: 0,
          shadowColor: "transparent",
          shadowOpacity: 0,
          shadowOffset: 0,
        },
      }}
    />
    <BottomTab.Screen
      name="My Jobs"
      component={MyJobsStack}
      options={{
        tabBarStyle: {
          borderTopColor: Colors.Primary[100],
          borderTopWidth: 0,
          elevation: 0,
          shadowColor: "transparent",
          shadowOpacity: 0,
          shadowOffset: 0,
        },
      }}
    />
    <BottomTab.Screen
      name="Chats"
      component={ChatsStack}
      options={{
        tabBarStyle: {
          borderTopColor: Colors.Primary[100],
          borderTopWidth: 0,
          elevation: 0,
          shadowColor: "transparent",
          shadowOpacity: 0,
          shadowOffset: 0,
        },
      }}
    />
    <BottomTab.Screen
      name="Profile"
      component={ProfileStack}
      options={{
        tabBarStyle: {
          borderTopColor: Colors.Primary[100],
          borderTopWidth: 0,
          elevation: 0,
          shadowColor: "transparent",
          shadowOpacity: 0,
          shadowOffset: 0,
        },
      }}
    />
  </BottomTab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
