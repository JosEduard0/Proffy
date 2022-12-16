import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import TeacherList from '../pages/TeacherList';
import Favorites from '../pages/Favorites';

const { Navigator, Screen } = createBottomTabNavigator();

function StudyTabs() {
  return (
    <Navigator
      screenOptions={{
        tabBarStyle: {
          elevation: 0,
          shadowOpacity: 0,
          height: 64,
        },
        
        tabBarLabelPosition: 'beside-icon',
        
        tabBarIconStyle: {
          flex: 0,
          width: 24,
          height: 24,
        },
        
        tabBarLabelStyle: {
          fontFamily: 'Archivo_700Bold',
          fontSize: 13,
          marginLeft: 16,
        },
        
        tabBarActiveBackgroundColor:'#EBEBF5',
        tabBarInactiveBackgroundColor:'#FAFAFC',
        
        tabBarActiveTintColor: '#32264D',
        tabBarInactiveTintColor: '#C1BCCC',
        
        showIcon: true,
      }}
    >
      <Screen 
        name="TeacherList" 
        component={TeacherList}
        options={{
          headerShown: false,
          tabBarLabel: 'Proffys',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons name="easel-outline" color={focused ? '#8257E5' : color} size={size} />
            )
          },
        }}
      />
      <Screen 
        name="Favorites" 
        component={Favorites} 
        options={{
          headerShown: false,
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons name="heart-outline" color={focused ? '#8257E5' : color} size={size} />
            )
          },
        }}
      />
    </Navigator>
   )
}

export default StudyTabs;