import React, { ReactNode } from 'react';
import { View, Image, Text, ScrollView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native'

import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png';

interface PageHeaderProps {
  title: string;
  headerRight?: ReactNode;
}

import styles from './styles';

const PageHeader: React.FC<PageHeaderProps> = ({ title, headerRight, children }) => {
  const { navigate } = useNavigation();
  
  function handleGoBack() {
    navigate("Landing");
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <RectButton onPress={handleGoBack} style={styles.backButton}>
          <Image source={backIcon} resizeMode="contain" />
        </RectButton>
        
        <Image source={logoImg} resizeMode="contain" />
      </View>
      
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {headerRight}
      </View>
      
      {children}
    </View>
    
  );
}

export default PageHeader;
