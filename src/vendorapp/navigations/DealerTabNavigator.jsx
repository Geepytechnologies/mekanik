import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Requests from "../screens/requests/Screens/Requests";
import Wallet from "../screens/wallet/screens/Wallet";
import { Platform } from "react-native";
import SettingsHomeScreen from "../screens/settings/screens/SettingsHomeScreen";
import { MaterialIcons } from "@expo/vector-icons";
import Dealerhome from "../screens/dealerapp/orders/screens/Dealerhome";
import Dealershop from "../screens/dealerapp/orders/screens/Dealershop";

const Tab = createBottomTabNavigator();

const DealerTabNavigator = () => {
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
        ) : icon == "materialicon" ? (
          <MaterialIcons name={iconName} size={size} color={color} />
        ) : (
          <Ionicons name={iconName} size={size} color={color} />
        )}
        <Text style={{ color: focused ? "#0D0D0D" : "#AFAEAE" }}>{label}</Text>
      </View>
    );
  };
  return (
    <Tab.Navigator
      initialRouteName="orders"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "whitesmoke",
          height: Platform.OS == "ios" ? 90 : 70,
        },
        headerStyle: { backgroundColor: "whitesmoke" },
        tabBarLabel: () => null,
      }}
    >
      <Tab.Screen
        name="orders"
        component={Dealerhome}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color, focused }) => (
            <CustomTabBarItem
              iconName={"shopping-basket"}
              size={28}
              color={focused ? "#0D0D0D" : "#D9D9D9"}
              label="Orders"
              focused={focused}
              icon={"materialicon"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="shop"
        component={Dealershop}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color, focused }) => (
            <CustomTabBarItem
              iconName={"shop"}
              size={28}
              color={focused ? "#0D0D0D" : "#D9D9D9"}
              label="Shop"
              focused={focused}
              icon={"entypo"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color, focused }) => (
            <CustomTabBarItem
              iconName={"wallet"}
              size={28}
              color={focused ? "#0D0D0D" : "#D9D9D9"}
              label="Wallet"
              focused={focused}
              icon={"material"}
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

export default DealerTabNavigator;
