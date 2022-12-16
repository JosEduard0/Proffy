import React from 'react';
import { View, ScrollView } from 'react-native';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import styles from './styles';

function Favorites() {
  return (
    <ScrollView style={styles.container}>
     <PageHeader title="Meus proffys favoritos" />
     
     <View 
      style={styles.teacherList}
      contentContainerStyle={{
        paddingHorizontal: 16,
        paddingBottom: 16,
      }}
    >
      <TeacherItem />
      <TeacherItem />
     </View>
    </ScrollView>
   );
}

export default Favorites;