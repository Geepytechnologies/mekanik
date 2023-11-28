import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import SettingsHomeScreen from "../screens/settings/screens/SettingsHomeScreen";
import GarageHomeScreen from "../screens/garage/screens/GarageHomeScreen";
import Home from "../screens/dashboard/screens/Home";
import ShopHomeScreen from "../screens/shop/screens/ShopHomeScreen";

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  const navigation = useNavigation();
  const CustomTabBarItem = ({
    size,
    color,
    iconName,
    label,
    focused,
    icon,
  }) => {
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 5,
        }}
      >
        {icon == "entypo" ? (
          <Entypo name={iconName} size={size} color={color} />
        ) : icon == "material" ? (
          <MaterialCommunityIcons name={iconName} size={size} color={color} />
        ) : (
          <Ionicons name={iconName} size={size} color={color} />
        )}
        <Text style={{ color: focused ? "#0D0D0D" : "#AFAEAE" }}>{label}</Text>
      </View>
    );
  };
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "whitesmoke",
          height: 70,
        },
        headerStyle: { backgroundColor: "whitesmoke" },
        tabBarLabel: () => null,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color, focused }) => (
            <CustomTabBarItem
              iconName={"home"}
              size={28}
              color={focused ? "#0D0D0D" : "#D9D9D9"}
              label="Home"
              focused={focused}
              icon={"material"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="My garage"
        component={GarageHomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color, focused }) => (
            <CustomTabBarItem
              iconName={"car-outline"}
              size={28}
              color={focused ? "#0D0D0D" : "#D9D9D9"}
              label="My Garage"
              focused={focused}
              icon={"material"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Auto shop"
        component={ShopHomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color, focused }) => (
            <CustomTabBarItem
              iconName={"shop"}
              size={28}
              color={focused ? "#0D0D0D" : "#D9D9D9"}
              label="Auto shop"
              focused={focused}
              icon={"entypo"}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={SettingsHomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color, focused }) => (
            <CustomTabBarItem
              iconName={"settings-outline"}
              size={28}
              color={focused ? "#0D0D0D" : "#D9D9D9"}
              label="Settings"
              focused={focused}
              icon={"ionicons"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
